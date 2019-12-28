import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Morozhenoe extends Component {
    displayName = Morozhenoe.name

    constructor(props) {
        super(props);
        this.state = { morozhenoes: [], loading: true };

        fetch('api/Morozhenoe/GetMorozhenoes')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
                this.setState({ morozhenoes: data, loading: false });
            });
    }

    static renderForecastsTable(morozhenoes) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                    <th>№</th>
                        <th>Наименование</th>
                        <th>Форма рожка</th>
                        <th>Вкус рожка</th>
                    </tr>
                </thead>
                <tbody>
                    {morozhenoes.map(morozhenoe =>
                        <tr key={morozhenoe.id}>
                            <td>{morozhenoe.id}</td>
                            <td>{morozhenoe.nazv}</td>
                            <td>{morozhenoe.rozhok.forma.nazv}</td>
                            <td>{morozhenoe.rozhok.vkus.nazv}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Morozhenoe.renderForecastsTable(this.state.morozhenoes);

        return (
            <div className="catalog2">
                <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                <div className="tabl">
                    <div className="fontAll __indexFormMargin">
                        <div className="fontHeading">
                            <h1>Мороженое</h1>
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
