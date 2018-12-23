import Head from "next/head";
import Link from "next/link";
import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navActive: false }
  }

  toggleNavActive = () => {
    console.log("TEST")
    this.setState((prev, props) => {
      return { navActive: !prev.navActive }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css" />
        </Head>
        <div className="navbar" role="navigation" aria-label="main navigation">

          <div className="navbar-brand">
            {/* LOGO */}
            <Link href='/'>
              <a className="navbar-item">
                ImiRP
            </a>
            </Link>

            {/* BURGER MENU */}
            <a role="button" className={`navbar-burger burger ${this.state.navActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navmain" onClick={this.toggleNavActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          {/* LEFT NAV SECTION */}
          <div id='navmain' className={`navbar-menu ${this.state.navActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
              <Link href="/contact">
                <a className="navbar-item">
                  Contact Us
                </a>
              </Link>
              <a className="navbar-item" href="http://app.imirp.org">
                App
                </a>
            </div>
          </div>

          {/* RIGHT NAV SECTION */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="link" href="https://github.com/imirp">
                  <img src="static/images/GitHub-Mark-32px.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {this.props.children}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>© ImiRP.org 2018</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
};
