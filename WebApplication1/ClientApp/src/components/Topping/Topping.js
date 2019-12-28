import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Topping extends Component {
    displayName = Topping.name

    constructor(props) {
        super(props);
        this.state = { toppings: [], loading: true };

        fetch('api/Topping/GetToppings')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
                this.setState({ toppings: data, loading: false });
            });
    }

    static renderForecastsTable(toppings) {
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
                    {toppings.map(topping =>
                        <tr key={topping.id}>
                            <td>{topping.id}</td>
                            <td>{topping.nazv}</td>
                            <td>{topping.opisanie}</td>
                            <td>{topping.cena}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Topping.renderForecastsTable(this.state.toppings);

        return (
            <div className="catalog2">
                <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                <div className="tabl">
                    <div className="fontAll __indexFormMargin">
                        <div className="fontHeading">
                            <h1>Топпинги</h1>
                        </div>
                        <div>
                            <div className="linkWidth">
                                <Link to="/">
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
