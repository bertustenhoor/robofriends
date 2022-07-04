import React, { Component } from 'react';
import './Hello.css';
import 'tachyons';

class Hello extends Component {
    render() {
        return (
        <div className="fw6 f1 tc">
        <h1>Hello World II</h1>
        <p>Welcome to react!</p>
        </div>
        );
    }
}

export default Hello;