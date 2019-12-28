import React, { Component } from 'react';

export class AddClient extends Component {
    displayName = AddClient.name

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            loading: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
    }

    onNameChange(e) {
        this.setState({ name: e.target.value });
    }

    onPhoneChange(e) {
        this.setState({ phone: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "name": this.state.name,
            "phone": this.state.phone,
        });
        fetch('api/Oneclient/AddClient', {
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
        this.props.history.push("/client");
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
                    <h1>Клиент</h1>
                    <div>
                        <div className="nameAction">
                            Добавление
                        </div>
                        <div className="__form">
                            <form onSubmit={(e) => this.onSubmit(e)}>
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
