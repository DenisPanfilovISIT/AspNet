import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Ulica extends Component {
    displayName = Ulica.name

    constructor(props) {
        super(props);
        this.state = { ulicas: [], loading: true };

        fetch('api/Ulica/GetUlicas', {
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": "Bearer " + sessionStorage.getItem('Token')
                },
            }
        )
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({ ulicas: data, loading: false });
            });
    }

    static renderForecastsTable(ulicas) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                    <th>№</th>
                        <th>Наименование</th>

                    </tr>
                </thead>
                <tbody>
                    {ulicas.map(ulica =>
                        <tr key={ulica.id}>
                            <td>{ulica.id}</td>
                            <td>{ulica.nazv}</td>

                            <td>
                                <div className="linkD">
                                    <Link to={`/ulica/edit/${ulica.id}`}>
                                        <div className="linkEdit">
                                            Редактировать
                                        </div>
                                    </Link>
                                    <button className="buttonDelete" onClick={(e) => this.delete(ulica.id, e)}>
                                        Удалить
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    static delete(id, e) {
        e.preventDefault();
        fetch('api/Ulica/DeleteUlica', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem('Token')
            },
            body: JSON.stringify({ "id": id }),
        }).then(response => {
            console.log(response);
        });
        return window.location.href = "/ulica";
    }
    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Ulica.renderForecastsTable(this.state.ulicas);

            return (
                <div className="catalog2">
                    <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                    <div className="tabl">
                <div className="fontAll __indexFormMargin">
                    <div className="fontHeading">
                        <h1>Улицы</h1>
                    </div>
                    <div>
                        <div className="linkWidth">
                            <Link to="/ulica/add">
                                <div className="linkAdd">
                                    Добавить
                                </div>
                            </Link>
                        </div>
                        <div className="content">
                            {contents}
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            );
        }
    }
}
