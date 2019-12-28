import React, { Component } from 'react';

export class Login extends Component {
    displayName = Login.name

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            tokenKey: "",
        };

        // col.setAttribute('display', 'none');
        // let token = this.state.tokenKey;
        // sessionStorage.setItem('token', 'key');
        console.log(sessionStorage.getItem('token'));
        this.onSubmit = this.onSubmit.bind(this);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onLoginChange(e) {
        this.setState({ login: e.target.value });
    }

    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        let data = JSON.stringify({
            "login": this.state.login,
            "password": this.state.password,
        });
        fetch('api/Account/Token', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                sessionStorage.setItem('Token', data.access_token);
                if (sessionStorage.getItem('Token')) {
                    return window.location.href = "/";

                }
            });
    };

    render() {
        return (
            <div className="__login fontAll">
                <div className="auth">
                    Авторизация
                </div>
                <div className="__formAuth">
                    <form onSubmit={(e) => this.onSubmit(e)}>
                        <p>
                            <label>Логин</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.login}
                                onChange={this.onLoginChange} />
                        </p>
                        <p>
                            <label>Пароль</label>
                            <input type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onPasswordChange} />
                        </p>
                        <input className="authButton" type="submit" value="Войти" />
                    </form>
                </div>
            </div>
        );
    }

    componentDidMount() {
        let col = document.getElementsByClassName('col-sm-3');
        let style = col.item(0);
        style.style.display = "none";
        let col9 = document.getElementsByClassName('col-sm-9');
        let style9 = col9.item(0);
        // style9.style.marginLeft = 0;
        style9.style.margin = "8% 30% 0 32%";
    }
}
