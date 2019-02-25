/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import $ from 'jquery';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  form() {
    return (
      <div>
        <p>Test</p>
      </div>
    );
  }


  render() {
    return (
      this.form()
    );
  }
}


export default Form;
