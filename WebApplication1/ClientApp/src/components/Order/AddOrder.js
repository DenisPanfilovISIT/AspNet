import React, { Component } from 'react';

export class AddOrder extends Component {
    displayName = AddOrder.name

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            dateor: "",
            summa: "",
            status: "",
            mesto: "",
            statuss: [],
            ulicas:[],
            loading: true
        };

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
                this.setState({ statuss: data, loading: false});
            });

        fetch('api/Ulica/GetUlicas', {
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
                this.setState({ ulicas: data, loading: false });
            });

       
        this.onSubmit = this.onSubmit.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.mestoChange = this.mestoChange.bind(this);

    }

    statusChange(e) {
        this.setState({ status: e.target.value });
    }


    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onPhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    mestoChange(e) {
    this.setState({ mesto: e.target.value });
}



    onSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "name": this.state.name,
            "phone": this.state.phone,

            "statusID": this.state.status,
            "mestoID": this.state.mesto

           
        });
        fetch('api/Zakaz/AddOrder', {
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
        this.props.history.push("/order");
    };

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            return (
                <div className="fontAll">
                    <h1>Заказы</h1>
                    <div>
                        <div className="nameAction">
                            Добавление
                        </div>
                        <div className="__form">
                            <form onSubmit={(e) => this.onSubmit(e)}>
                                <fieldset>
                                    <legend>Клиент</legend>
                                    <p className="__position">
                                        <label className="__labelForm">Имя</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.name}
                                            onChange={this.onNameChange} />
                                    </p>
                                    <p className="__position">
                                        <label className="__labelForm">Телефон</label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.phone}
                                            onChange={this.onPhoneChange} />
                                    </p>
                                  
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Данные заказа
                                    </legend>

                                    <p className="__position">
                                        <label className="__labelForm">Статус заказа</label>
                                        <select required className="form-control" value={this.state.status} onChange={this.statusChange}>
                                            <option style={{ display: 'none' }}></option>
                                            {this.state.statuss.map(status =>
                                                <option key={status.id} value={status.id}>{status.nazv}</option>
                                            )}
                                        </select>
                                    </p>
                                    <p className="__position">
                                        <label className="__labelForm">Место заказа</label>
                                        <select required className="form-control" value={this.state.mesto} onChange={this.mestoChange}>
                                            <option style={{ display: 'none' }}></option>
                                            {this.state.ulicas.map(mesto =>
                                                <option key={mesto.id} value={mesto.id}>{mesto.nazv}</option>
                                            )}
                                        </select>
                                    </p>
                                </fieldset>
                                <input className="saveButton" type="submit" value="Сохранить" />
                            </form>
                        </div>
                    </div>
                </div>
            );
        }

    }
}
