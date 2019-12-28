import React, { Component } from 'react';
import style from "../style/style.css"

export class Header extends Component {
    displayName = Header.name

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
    }

    onSubmit = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('Token');
        return window.location.href = "/auth/login";
    };

    render() {
        if (!sessionStorage.getItem('Token')) {
            return null;
        } else {
            return (
                <div className="header">
                    <form onSubmit={(e) => this.onSubmit(e)}>
<text className="citata">Тюмень - лучший город Земли</text>
                        <input className="logOut" type="submit" value="Выйти" />

                    </form>

                </div>

            );
        }

    }

    // componentDidMount() {
    //     let col = document.getElementsByClassName('header');
    //     let style = col.item(0);
    //     style.style.display = "none";
    // }
}
