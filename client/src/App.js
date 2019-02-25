import React, { Component } from 'react';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderView() {
        return (
            <div>
                <h1>HELLO WORLD</h1>
            </div>
        )

    }

    render() {
        return (
            this.renderView()
        );
    };
};

export default App;