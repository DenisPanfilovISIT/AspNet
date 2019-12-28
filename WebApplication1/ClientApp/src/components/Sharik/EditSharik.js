import React, { Component } from 'react';


export class EditSharik extends Component {
    displayName = EditSharik.name

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nazv: "",
            opisanie:"",
            cena:"",


            loading: true
        };

        let path = JSON.stringify(this.props.location.pathname);
        let app = path.split('/');
        this.state.id = app[3].slice(0, -1);

        fetch('api/Sharik/GetSharik/?id=' + this.state.id, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem('Token')
            },
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data.id,
                    nazv: data.nazv,
                    opisanie: data.opisanie,
                    cena: data.cena,

                    loading: false
                });
            });

        this.onSubmit = this.onSubmit.bind(this);
        this.onNazvChange = this.onNazvChange.bind(this);
        this.onOpisanieChange = this.onOpisanieChange.bind(this);
        this.onCenaChange = this.onCenaChange.bind(this);
    }

    onNazvChange(e) {
        this.setState({ nazv: e.target.value });
    }

    onOpisanieChange(e) {
        this.setState({ opisanie: e.target.value });
    }

    onCenaChange(e) {
        this.setState({ cena: e.target.value });
    }




    onSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "id": this.state.id,
            "nazv": this.state.nazv,
            "opisanie": this.state.opisanie,
            "cena": this.state.cena,

        });
        fetch('api/Sharik/EditSharik', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + sessionStorage.getItem('Token')
            },
            body: data,
        }).then(response => {
            console.log(response);
        });
        this.props.history.push("/sharik");
    };

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            return (
                <div className="catalog2">
                    <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>

                    <div className="tabl2">
                        <div className="fontform">
                            <h1>Шарик</h1>
                            <div>
                                <div className="nameAction">
                                    Редактирование
                                </div>
                                <div className="__form">
                                    <form onSubmit={(e) => this.onSubmit(e)}>
                                        <p className="__position">
                                            <label className="__labelForm">Название</label>
                                            <input type="text"
                                                   required
                                                   className="form-control"
                                                   value={this.state.nazv}
                                                   onChange={this.onNazvChange} />
                                        </p>
                                        <p className="__position">
                                            <label className="__labelForm">Описание</label>
                                            <input type="text"
                                                   required
                                                   className="form-control"
                                                   value={this.state.opisanie}
                                                   onChange={this.onOpisanieChange} />
                                        </p>
                                        <p className="__position">
                                            <label className="__labelForm">Цена</label>
                                            <input type="text"
                                                   required
                                                   className="form-control"
                                                   value={this.state.cena}
                                                   onChange={this.onCenaChange} />
                                        </p>

                                        <input className="saveButton" type="submit" value="Сохранить" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
