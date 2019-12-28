import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Status extends Component {
    displayName = Status.name

    constructor(props) {
        super(props);
        this.state = { statuss: [], loading: true };

        fetch('api/Kurier/GetStatuses', {
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
                this.setState({ statuss: data, loading: false });
            });
    }

    static renderForecastsTable(statuss) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Состояние</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {statuss.map(status =>
                        <tr key={status.id}>
                            <td>{status.id}</td>
                            <td>{status.nazv}</td>
                            <td>
                                <div className="linkD">
                                    <Link to={`/status/edit/${status.id}`}>
                                        <div className="linkEdit">
                                            Редактировать
                                </div>
                                    </Link>
                                    <button className="buttonDelete" onClick={(e) => this.delete(status.id, e)}>
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
        fetch('api/Kurier/DeleteStatus', {
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
        return window.location.href = "/status";
    }

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Status.renderForecastsTable(this.state.statuss);

        return (
            <div className="catalog2">
                <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                <div className="tabl">
                <div className="fontAll __indexFormMargin">
                    <div className="fontHeading">
                        <h1>Статусы</h1>
                    </div>
                    <div>
                        <div className="linkWidth">
                            <Link to="/status/add">
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