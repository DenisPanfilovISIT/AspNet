import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Forma extends Component {
    displayName = Forma.name

    constructor(props) {
        super(props);
        this.state = { formas: [], loading: true };

        fetch('api/Forma/GetFormas', {
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
                this.setState({ formas: data, loading: false });
            });
    }

    static renderForecastsTable(formas) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Наименование</th>
                        <th>Вместимость</th>
                    </tr>
                </thead>
                <tbody>
                    {formas.map(forma =>
                        <tr key={forma.id}>
                            <td>{forma.id}</td>
                            <td>{forma.nazv}</td>
                            <td>{forma.vmestimost}</td>
                            <td>
                                <div className="linkD">
                                    <Link to={`/forma/edit/${forma.id}`}>
                                        <div className="linkEdit">
                                            Редактировать
                                        </div>
                                    </Link>
                                    <button className="buttonDelete" onClick={(e) => this.delete(forma.id, e)}>
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
        fetch('api/Forma/DeleteForma', {
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
        return window.location.href = "/forma";
    }

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Forma.renderForecastsTable(this.state.formas);

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
                                <h1>Форма</h1>
                            </div>
                            <div>
                                <div className="linkWidth">
                                    <Link to="/forma/add">
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
