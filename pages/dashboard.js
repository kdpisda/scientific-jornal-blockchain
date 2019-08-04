import React from "react";
import Router from "next/router";
import Navbar from "./components/DashboardNavbar";
import FAB from "./components/FabToAdd";
import Header from "./components/DashboardHeader";
import Footer from "./components/DashboardFooter";
import { inject } from "mobx-react";
import { runInAction } from "mobx";

@inject("store")
export default class Dashboard extends React.Component {
  render() {
    const { user } = this.props.store;
    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">Dashboard</h3>
                  <a
                    className="btn btn-primary btn-sm d-none d-sm-inline-block text-white"
                    role="button"
                    onClick={() =>
                      runInAction(() => {
                        user.address = "guesttoken";
                        Router.replace("/");
                      })
                    }
                  >
                    <i className="fas fa-sign-out-alt fa-sm text-white" />
                    &nbsp;Logout
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                              <span>Earnings</span>
                            </div>
                            <div className="text-dark font-weight-bold h5 mb-0">
                              <span>$40,000</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-calendar fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-success py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className="text-uppercase text-success font-weight-bold text-xs mb-1">
                              <span>My Requests</span>
                            </div>
                            <div className="text-dark font-weight-bold h5 mb-0">
                              <span>$215,000</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-info py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className="text-uppercase text-info font-weight-bold text-xs mb-1">
                              <span>Requests Served</span>
                            </div>
                            <div className="row no-gutters align-items-center">
                              <div className="col-auto">
                                <div className="text-dark font-weight-bold h5 mb-0 mr-3">
                                  <span>50%</span>
                                </div>
                              </div>
                              <div className="col">
                                <div className="progress progress-sm">
                                  <div
                                    className="progress-bar bg-info"
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ style: "50%" }}
                                  >
                                    <span className="sr-only">50%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-warning py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className="text-uppercase text-warning font-weight-bold text-xs mb-1">
                              <span>Pending Requests</span>
                            </div>
                            <div className="text-dark font-weight-bold h5 mb-0">
                              <span>18</span>
                            </div>
                          </div>
                          <div className="col-auto">
                            <i className="fas fa-comments fa-2x text-gray-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">
                          My Requests
                        </h6>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>Research Paper</strong>
                              </h6>
                              <span className="text-xs">10:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-1"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>Research Work</strong>
                              </h6>
                              <span className="text-xs">11:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-2"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>Paper on CNN</strong>
                              </h6>
                              <span className="text-xs">12:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-3"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">
                          Requests Pending on me
                        </h6>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>Deel Learning in IoT</strong>
                              </h6>
                              <span className="text-xs">10:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-1"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>Natural Learning Processing</strong>
                              </h6>
                              <span className="text-xs">11:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-2"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                              <h6 className="mb-0">
                                <strong>BERT</strong>
                              </h6>
                              <span className="text-xs">12:30 AM</span>
                            </div>
                            <div className="col-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-3"
                                />
                                <label className="custom-control-label" />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
        <FAB />
      </div>
    );
  }
}
