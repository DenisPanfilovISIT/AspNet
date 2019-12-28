import React, {Component} from 'react';
import moment from "moment";
import {Link} from "react-router-dom";



export class Order extends Component {
    displayName = Order.name

    constructor(props) {
        super(props);
        this.state = {orders: [], loading: true};

        fetch('api/Zakaz/GetOrders')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                this.setState({orders: data, loading: false});
            });
    }

    static renderForecastsTable(orders) {
        return (
            <table className='table'>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Дата и время заказа</th>
                    <th>Сумма</th>
                    <th>Статус</th>
                    <th>Клиент</th>
                    <th>Место доставки (Улица)</th>
                    <th>Место доставки (Дом)</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order =>
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{moment(order.dateor).format('DD.MM.YYYY hh:mm:ss')}</td>
                        <td>{order.summa}</td>
                        <td>{order.status.nazv}</td>
                        <td>{order.client.name}</td>
                        <td>{order.mesto.ulica.nazv}</td>
                        <td>{order.mesto.house}</td>

                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    export(e) {
        e.preventDefault();
        fetch('api/Zakaz/ExportExcel', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem('Token')
            },
        })
            .then(response => response.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(url => {
                window.open(url, '_blank');
                URL.revokeObjectURL(url);
            });
    }

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            let contents = this.state.loading
                ? <p><em>Loading...</em></p>
                : Order.renderForecastsTable(this.state.orders);

            return (
                <div className="catalog2">
                    <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                    <div className="tabl">
                <div className="fontAll __indexFormMargin">
                    <div className="fontHeading">
                        <h1>Заказы</h1>
                    </div>
                    <div>
                        <div className="linkWidth">
                            <Link to="/zakaz/add">
                                <div className="linkAdd">
                                    Добавить
                                </div>
                            </Link>
                        </div>
                    </div>
                <button className="linkAddEx" onClick={(e) => this.export(e)}>Excel</button>
                <div className="content">
                    {contents}
                </div>
            </div>
                </div>

                </div>

            );
        }

    }
}
