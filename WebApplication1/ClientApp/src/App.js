import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Order } from './components/Order/Order';
import { AddOrder } from './components/Order/AddOrder';
import { Client } from './components/Client/Client';
import { EditClient } from './components/Client/EditClient'
import { AddClient } from './components/Client/AddClient'
import { Status } from './components/Status/Status';
import { EditStatus } from './components/Status/EditStatus'
import { AddStatus } from './components/Status/AddStatus'
import { Mesto } from './components/Mesto/Mesto';
import { Forma } from './components/Forma/Forma';
import { EditForma } from './components/Forma/EditForma'
import { AddForma } from './components/Forma/AddForma'
import { Morozhenoe } from './components/Morozhenoe/Morozhenoe';
import { Rozhok } from './components/Rozhok/Rozhok';
import { Sharik } from './components/Sharik/Sharik';
import { EditSharik } from './components/Sharik/EditSharik'
import { AddSharik } from './components/Sharik/AddSharik'
import { Topping } from './components/Topping/Topping';
import { Ulica } from './components/Ulica/Ulica';
import { EditUlica } from './components/Ulica/EditUlica'
import { AddUlica } from './components/Ulica/AddUlica'

import { Vkus } from './components/Vkus/Vkus';
import { EditVkus } from './components/Vkus/EditVkus'
import { AddVkus } from './components/Vkus/AddVkus'
import { Login } from "./components/Login";
import { Header } from "./components/Header";


export default class App extends Component {
  displayName = App.name

    render() {
        let style;
        if (!sessionStorage.getItem('Token')) {
            style = {
                display: 'none',
            }
        }
        return (
            <React.Fragment>
                <Header />
                <Layout style={{
                    fontFamily: "Yeseva One"
                }}>
                    <Route exact path='/auth/login' component={Login} />
                    <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
                    <Route path='/order' component={Order} />
                    <Route path='/zakaz/add' component={AddOrder} />
                    <Route exact path='/client' component={Client} />
                    <Route path='/client/edit' component={EditClient} />
                    <Route path='/client/add' component={AddClient} />
                    <Route exact path='/status' component={Status} />
                    <Route path='/status/edit' component={EditStatus} />
                    <Route path='/status/add' component={AddStatus} />
        <Route path='/mesto' component={Mesto} />
                    <Route exact path='/forma' component={Forma} />
                    <Route path='/forma/edit' component={EditForma} />
                    <Route path='/forma/add' component={AddForma} />
        <Route path='/morozhenoe' component={Morozhenoe} />
                    <Route exact path='/sharik' component={Sharik} />
                    <Route path='/sharik/edit' component={EditSharik} />
                    <Route path='/sharik/add' component={AddSharik} />
        <Route path='/topping' component={Topping} />
        <Route exact path='/rozhok' component={Rozhok} />
                    <Route exact path='/ulica' component={Ulica} />
                    <Route path='/ulica/edit' component={EditUlica} />
                    <Route path='/ulica/add' component={AddUlica} />
                    <Route exact path='/vkus' component={Vkus} />
                    <Route path='/vkus/edit' component={EditVkus} />
                    <Route path='/vkus/add' component={AddVkus} />
                </Layout>
            </React.Fragment>
    );
  }
}
