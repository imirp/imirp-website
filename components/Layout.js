import Head from "next/head";
import Link from "next/link";
import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navActive: false };
  }

  toggleNavActive = () => {
    console.log("TEST");
    this.setState((prev, props) => {
      return { navActive: !prev.navActive };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
        </Head>
        {/* NAV BAR */}
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            {/* LOGO */}
            <Link href="/">
              <a className="navbar-item">ImiRP</a>
            </Link>

            {/* BURGER MENU */}
            <a
              role="button"
              className={`navbar-burger burger ${
                this.state.navActive ? "is-active" : ""
              }`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navmain"
              onClick={this.toggleNavActive}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          {/* LEFT NAV SECTION */}
          <div
            id="navmain"
            className={`navbar-menu ${this.state.navActive ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <Link href="/about">
                <a className="navbar-item">About</a>
              </Link>
              <Link href="/documentation">
                <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Documentation</a>
                  <div className="navbar-dropdown">
                    <Link href="/documentation/publication">
                      <a className="navbar-item">Publication</a>
                    </Link>
                    <Link href="/documentation/guide">
                      <a className="navbar-item">Guide</a>
                    </Link>
                  </div>
                </div>
              </Link>
              <Link href="/updates">
                <a className="navbar-item">Project Updates</a>
              </Link>
            </div>
          </div>

          {/* RIGHT NAV SECTION */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a className="button is-primary" href="http://app.imirp.org">
                    Launch ImiRP
                  </a>
                </p>
                <p class="control">
                  <a className="button is-dark" href="https://github.com/imirp">
                    <span class="icon">
                      <i class="fab fa-github fa-lg" />
                    </span>
                    <span>GitHub</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>

        {/*PAGE INJECTED CONTENT */}
        {this.props.children}

        {/* FOOTER SECTION */}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>© ImiRP.org 2018</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
