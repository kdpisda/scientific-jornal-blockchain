import React from "react";

export default class Register extends React.Component {
  componentDidMount(){
    document.body.classList.add("bg-gradient-primary");
  }

  componentDidUnmount(){
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
                    <h4 className="text-dark mb-4">Signup</h4>
                  </div>
                  <img src="./static/img/account.svg" width="100%" />
                  <br />

                  <form className="user">
                    <a
                      className="btn btn-primary btn-block text-white btn-google btn-user"
                      role="button"
                    >
                      <i className="fab fa-google" />&nbsp; Register with Google
                    </a>
                    <a
                      className="btn btn-primary btn-block text-white btn-facebook btn-user"
                      role="button"
                    >
                      <i className="fab fa-facebook-f" />&nbsp; Register with
                      Facebook
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
