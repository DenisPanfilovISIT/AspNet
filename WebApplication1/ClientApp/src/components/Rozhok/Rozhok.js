import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Rozhok extends Component {
    displayName = Rozhok.name

    constructor(props) {
        super(props);
        this.state = { formas: [], loading: true };

        fetch('api/Vaflya/GetRozhoks')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
                this.setState({ rozhoks: data, loading: false });
            });
    }

    static renderForecastsTable(rozhoks) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Цена</th>
                        <th>Описание</th>
                        <th>Вкус</th>
                        <th>Форма</th>
                    </tr>
                </thead>
                <tbody>
                    {rozhoks.map(rozhok =>
                        <tr key={rozhok.id}>
                            <td>{rozhok.id}</td>
                            <td>{rozhok.cena}</td>
                            <td>{rozhok.opisanie}</td>
                            <td>{rozhok.vkus.nazv}</td>
                            <td>{rozhok.forma.nazv}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Rozhok.renderForecastsTable(this.state.rozhoks);

        return (
            <div className="catalog2">
                <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                <div className="tabl">
                    <div className="fontAll __indexFormMargin">
                        <div className="fontHeading">
                            <h1>Рожки</h1>
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
