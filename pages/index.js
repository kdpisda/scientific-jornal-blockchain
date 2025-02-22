import React from "react";
import { getLength, createUser } from "../ethereum/app";

export default class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
            <div className="container">
              <a className="navbar-brand" href="#">
                Journal
              </a>
              <button
                data-toggle="collapse"
                className="navbar-toggler"
                data-target="#navcol-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navcol-1">
                <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#">
                      Creators
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" href="#">
                      Users
                    </a>
                  </li>
                </ul>
                <span className="navbar-text actions">
                  <a className="login" href="/login">
                    Log In
                  </a>
                  <a
                    className="btn btn-light action-button"
                    role="button"
                    href="/register"
                  >
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </nav>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <img
                src="./static/img/undraw_done_a34v.svg?h=47c61e2d93670812b190768728bcd9b6"
                width="100%"
              />
            </div>
            <div className="col align-items-center align-content-center align-self-center">
              <div
                className="card align-items-center page-header"
                style={{ backgroundColor: "#f2f2f2", border: 0 }}
              >
                <div className="card-body text-center justify-content-center">
                  <h4 className="card-title">Open Journal</h4>
                  <h6 className="text-muted card-subtitle mb-2">
                    Powered by Blockchain
                  </h6>
                  <p className="card-text">
                    Get your research paper/journal verified more fast, securely
                    and openly while keeping the piracy in the mind&nbsp;
                  </p>
                  <button className="btn btn-primary" type="button">
                    Submit Your Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-clean">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">How does this work?</h2>
              <p className="text-center">
                Only three steps to get started. All your data in stored in the
                blockchain with the power of Matic Network&nbsp;
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    Create your account by clicking Login/Signup with Google or
                    Facebook
                  </p>
                </div>
                <div className="author">
                  <img
                    className="rounded-circle"
                    src="./static/img/round-account_circle-24px%20(1).svg?h=55d72866d7f83f061187e8477e40cba4"
                  />
                  <h5 className="name">Login/Signup</h5>
                  <p className="title">Just a click away</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    Upload your work and we make sure that it is only shared
                    with the reviewer.
                  </p>
                </div>
                <div className="author">
                  <img
                    className="rounded-circle"
                    src="./static/img/round-cloud_upload-24px.svg?h=c1c147c5d6813ff4fb296ecc80d6f0b9"
                  />
                  <h5 className="name">Submit Your Work</h5>
                  <p className="title">Upload your work</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">
                    You may manually ask reviewers to review or anyone from the
                    network may review it.
                  </p>
                </div>
                <div className="author">
                  <img
                    className="rounded-circle"
                    src="./static/img/round-question_answer-24px.svg?h=f73c0201692dc0b8b4634c9e142205c2"
                  />
                  <h5 className="name">Ask For Review</h5>
                  <p className="title">Pay using our secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-clean">
          <footer>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-4 col-md-3 item">
                  <h3>Services</h3>
                  <ul>
                    <li>
                      <a href="#">Web design</a>
                    </li>
                    <li>
                      <a href="#">Development</a>
                    </li>
                    <li>
                      <a href="#">Hosting</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                  <h3>About</h3>
                  <ul>
                    <li>
                      <a href="#">Company</a>
                    </li>
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Legacy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-3 item">
                  <h3>Careers</h3>
                  <ul>
                    <li>
                      <a href="#">Job openings</a>
                    </li>
                    <li>
                      <a href="#">Employee success</a>
                    </li>
                    <li>
                      <a href="#">Benefits</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 item social">
                  <a href="#">
                    <i className="icon ion-social-facebook" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-twitter" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-snapchat" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-instagram" />
                  </a>
                  <p className="copyright">Shakti Shakti Shaktimaan © 2019</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}
