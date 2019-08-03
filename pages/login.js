import React from "react";
import Router from "next/router";
import web3 from "../utils/helper";
import { createUser } from "../ethereum/app";

export default class Login extends React.Component {
  state = {
    account: "",
    balance: "",
    email: ""
  };

  componentDidMount() {
    document.body.classList.add("bg-gradient-primary");
    console.log(web3);
    // if not using store
    setTimeout(() => {
      if (window.web3) {
        web3.eth.getAccounts().then(accounts => {
          this.setState({ account: accounts[0] });
        });
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.account &&
      this.state.account !== "" &&
      prevState.account !== this.state.account
    ) {
      web3.eth.getBalance(this.state.account).then(balance => {
        this.setState({ balance: web3.utils.fromWei(balance) });
      });
    }
  }

  enableTorus = () => {
    window.ethereum.enable().then(accounts => {
      this.setState({ account: accounts[0] });
    });
    window.torus.login(true);
    Router.push("/dashboard");
  };

  importTorus = () => {
    import("@toruslabs/torus-embed").then(this.enableTorus);
  };

  componentDidUnmount() {
    document.body.classList.remove("bg-gradient-primary");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="p-5">
                  <div className="text-center">
                    <h4 className="text-dark mb-4">Signin</h4>
                  </div>
                  <img src="./static/img/account.svg" width="100%" />
                  <br />

                  <form className="user">
                    <div className="input-group">
                      <input
                        className="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Email"
                        onChange={email => {
                          this.setState({ email });
                        }}
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary py-0"
                          type="button"
                          onClick={() => {
                            if (createUser(this.state.email))
                              Router.push("/dashboard");
                          }}
                        >
                          <i className="fas fa-envelope-square" />
                        </button>
                      </div>
                    </div>
                    <hr />
                    <h2 className="text-center">OR</h2>
                    <a
                      className="btn btn-primary btn-block text-white btn-facebook btn-user"
                      role="button"
                      onClick={() => Router.push("/dashboard")}
                    >
                      <i className="fab fa-facebook-f" />
                      &nbsp; Signin with Browser
                    </a>
                    <hr />
                  </form>
                  <div className="text-center">
                    <a className="small" href="/register">
                      Don't have an account? Signup!
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
