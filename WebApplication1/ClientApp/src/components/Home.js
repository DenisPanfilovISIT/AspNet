import React, { Component } from 'react';


export class Home extends Component {
    displayName = Home.name

    render() {
        if (!sessionStorage.getItem('Token')) {
            return window.location.href = "/auth/login";
        } else {
            return (
                <body>
                <div className="catalog2">
                    <text className="info">Акции</text><text className="info">|</text><text className="info">Доставка и оплата</text> <text className="info">|</text><text className="info">Магазины</text> <text className="info">|</text> <text className="info">Поддержка</text>
                </div>
                <div className="glav">
                    <h1 className="h1">Всем привет, отображать мне здесь нечего, поэтому посмотрите, какой красавчик занимался этой работой ↓↓↓</h1>

                    <div className="kartinka">
                    <p align="center"><img src="https://sun9-47.userapi.com/c855632/v855632072/1198bd/-4hO7Qbo1Co.jpg" width="350" height="451"></img></p>
                    </div>

                </div>
                </body>
            );
        }

    }
}