import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class Client extends Component {
    displayName = Client.name

    constructor(props) {
        super(props);
        this.state = {clients: [], loading: true};

        fetch('api/Oneclient/GetClients', {
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
                this.setState({clients: data, loading: false});
            });
    }

    static renderForecastsTable(clients) {
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Имя</th>
                    <th>Телефон</th>
                </tr>
                </thead>
                <tbody>
                {clients.map(client =>
                    <tr key={client.id}>
                        <td>{client.id}</td>
                        <td>{client.name}</td>
                        <td>{client.phone}</td>
                        <td>
                            <div className="linkD">
                            <Link to={`/client/edit/${client.id}`}>
                                    <div className="linkEdit">
                                    Редактировать
                                </div>
                                </Link>
                                <button className="buttonDelete" onClick={(e) => this.delete(client.id, e)}>
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
        fetch('api/Oneclient/DeleteClient', {
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
        return window.location.href = "/client";
    }

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Client.renderForecastsTable(this.state.clients);

            return (
                <div className="catalog2">
                    <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                    <div className="tabl">
                <div className="fontAll __indexFormMargin">
                    <div className="fontHeading">
                        <h1>Клиенты</h1>
                    </div>
                    <div>
                        <div className="linkWidth">
                            <Link to="/client/add">
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
