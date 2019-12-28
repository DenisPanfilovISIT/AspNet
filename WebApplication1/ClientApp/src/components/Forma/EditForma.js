import React, { Component } from 'react';


export class EditForma extends Component {
    displayName = EditForma.name

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            nazv: "",
            vmestimost:"",

            loading: true
        };

        let path = JSON.stringify(this.props.location.pathname);
        let app = path.split('/');
        this.state.id = app[3].slice(0, -1);

        fetch('api/Forma/GetForma/?id=' + this.state.id, {
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
                    vmestimost: data.vmestimost,

                    loading: false
                });
            });

        this.onSubmit = this.onSubmit.bind(this);
        this.onNazvChange = this.onNazvChange.bind(this);
        this.onVmestimostChange = this.onVmestimostChange.bind(this);
    }

    onNazvChange(e) {
        this.setState({ nazv: e.target.value });
    }

    onVmestimostChange(e) {
        this.setState({ vmestimost: e.target.value });
    }



    onSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "id": this.state.id,
            "nazv": this.state.nazv,
            "vmestimost": this.state.vmestimost,

        });
        fetch('api/Forma/EditForma', {
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
        this.props.history.push("/forma");
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
                            <h1>Форма</h1>
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
                                            <label className="__labelForm">Вместимость</label>
                                            <input type="text"
                                                   required
                                                   className="form-control"
                                                   value={this.state.vmestimost}
                                                   onChange={this.onVmestimostChange} />
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
