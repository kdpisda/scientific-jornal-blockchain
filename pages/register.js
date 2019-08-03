import React from "react";
import { inject } from "mobx-react";
import Router from "next/router";
import { runInAction } from "mobx";
import { review } from "../ethereum/app";

@inject("store")
export default class Register extends React.Component {
  state = {
    name: "",
    address: ""
  };
  componentDidMount() {
    document.body.classList.add("bg-gradient-primary");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-gradient-primary");
  }

  render() {
    const { user } = this.props.store;
    if (user.address !== "guesttoken") Router.push("/dashboard");
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Signup</h4>
                  </div>
                  <img src="./static/img/account.svg" width="100%" />
                  <br />

                  <form className="user">
                    <div className="form-group">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="name"
                        aria-describedby="nameHelp"
                        placeholder="Enter Your Name"
                        name="name"
                        onChange={event => {
                          this.setState({ name: event.target.value });
                        }}
                        value={this.state.name}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control form-control-user"
                        type="text"
                        id="ethAdd"
                        aria-describedby="nameHelp"
                        placeholder="ETH Address"
                        name="address"
                        onChange={event => {
                          this.setState({ address: event.target.value });
                        }}
                        value={this.state.address}
                      />
                    </div>
                    <hr />
                    <a
                      className="btn btn-primary btn-block text-white btn-google btn-user"
                      role="button"
                      onClick={() => {
                        review
                          .createUser(this.state.address, this.state.name)
                          .then(response => {
                            Router.replace("/login");
                          })
                          .catch(e => {
                            console.log(e);
                          });
                      }}
                    >
                      <i className="fab fa-google" />
                      &nbsp; Register
                    </a>
                    <hr />
                  </form>
                  <div className="text-center">
                    <a className="small" href="/login">
                      Already have an account? Login!
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="/">
                      Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
