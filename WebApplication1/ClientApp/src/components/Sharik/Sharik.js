import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Sharik extends Component {
    displayName = Sharik.name

    constructor(props) {
        super(props);
        this.state = { shariks: [], loading: true };

        fetch('api/Sharik/GetShariks', {
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
                this.setState({ shariks: data, loading: false });
            });
    }

    static renderForecastsTable(shariks) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                    <th>№</th>
                        <th>Наименование</th>
                        <th>Описание</th>
                        <th>Стоимость</th>
                    </tr>
                </thead>
                <tbody>
                    {shariks.map(sharik =>
                        <tr key={sharik.id}>
                            <td>{sharik.id}</td>
                            <td>{sharik.nazv}</td>
                            <td>{sharik.opisanie}</td>
                            <td>{sharik.cena}</td>
                            <td>
                                <div className="linkD">
                                    <Link to={`/sharik/edit/${sharik.id}`}>
                                        <div className="linkEdit">
                                            Редактировать
                                        </div>
                                    </Link>
                                    <button className="buttonDelete" onClick={(e) => this.delete(sharik.id, e)}>
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
        fetch('api/Sharik/DeleteSharik', {
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
        return window.location.href = "/sharik";
    }

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Sharik.renderForecastsTable(this.state.shariks);

            return (

                <div className="catalog2">
                    <text className="info">Акции</text>
                    <text className="info">|</text>
                    <text className="info">Доставка и оплата</text>
                    <text className="info">|</text>
                    <text className="info">Магазины</text>
                    <text className="info">|</text>
                    <text className="info">Поддержка</text>
                    <div className="tabl">
                        <div className="fontAll __indexFormMargin">
                            <div className="fontHeading">
                                <h1>Шарики</h1>
                            </div>
                            <div>
                                <div className="linkWidth">
                                    <Link to="/sharik/add">
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
