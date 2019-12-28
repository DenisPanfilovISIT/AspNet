import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Mesto extends Component {
    displayName = Mesto.name

    constructor(props) {
        super(props);
        this.state = { mestos: [], loading: true };

        fetch('api/Dostavka/GetMestos')
            .then(response => { return response.json() })
            .then(data => {
                console.log(data);
                this.setState({ mestos: data, loading: false });
            });
    }

    static renderForecastsTable(mestos) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тэг</th>
                        <th>Дом</th>
                        <th>Подъезд</th>
                        <th>Этаж</th>
                        <th>Квартира</th>
                        <th>Код двери</th>
                        <th>Улица</th>
                    </tr>
                </thead>
                <tbody>
                    {mestos.map(mesto =>
                        <tr key={mesto.id}>
                            <td>{mesto.id}</td>
                            <td>{mesto.tag}</td>
                            <td>{mesto.house}</td>
                            <td>{mesto.podezd}</td>
                            <td>{mesto.etazh}</td>
                            <td>{mesto.kvartira}</td>
                            <td>{mesto.kodDveri}</td>
                            <td>{mesto.ulicaID}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Mesto.renderForecastsTable(this.state.mestos);

        return (
            <div className="catalog2">
                <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                <div className="tabl">
                    <div className="fontAll __indexFormMargin">
                        <div className="fontHeading">
                            <h1>Место доставки</h1>
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
