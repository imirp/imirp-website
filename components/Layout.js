import Head from "next/head";
import Link from "next/link";
import React from "react";

export default props => {
  return (
    <React.Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css"
        />
      </Head>
      <style jsx global>
        {`
          body {
            padding: 50px;
            font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
          }

          a {
            color: #00b7ff;
          }
        `}
      </style>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar" /> <span className="icon-bar" />{" "}
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
              ImiRP
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li id="about">
                <Link href="/contact">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li id="app">
                <a href="http://app.imirp.org">App</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        {props.children}
        <footer>© ImiRP.org 2018</footer>
      </div>
    </React.Fragment>
  );
};
