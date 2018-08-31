import React from "react";

import {CardList} from '../Clicker';
import Header from './Header.js'
import Footer from './Footer.js'
import {robots} from '../robots.js';

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {name: "Will"}
    }
    render() {
        setTimeout(() => {
            this.setState({name: "Bob"})
        },2000)
        return (
            <div>
            {this.state.name}
            <Header />
            <CardList  robots = {robots}/>
            <Footer />
            </div>
        );
    }
}