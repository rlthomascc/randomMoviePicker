import React, { Component } from 'react';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  footer() {
    return (
      <nav id="footer" className="navbar fixed-bottom bg-secondary">
        <p id="footerMessage">This project was brought to you by Randy L Thomas | 2019 </p>
        <a id="github-logo" target="_blank" href="http://www.github.com/rlthomascc">
          <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="30px" />
        </a>
      </nav>
    );
  }

  render() {
    return (
      this.footer()
    );
  }
}

export default Footer;
