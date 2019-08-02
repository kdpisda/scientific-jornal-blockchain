import React from "react";
import Navbar from "./components/DashboardNavbar";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                <div className="container-fluid">
                  <button
                    className="btn btn-link d-md-none rounded-circle mr-3"
                    id="sidebarToggleTop"
                    type="button"
                  >
                    <i className="fas fa-bars" />
                  </button>
                  <form className="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                      <input
                        className="bg-light form-control border-0 small"
                        type="text"
                        placeholder="Search for ..."
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary py-0" type="button">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="nav navbar-nav flex-nowrap ml-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow">
                      <a
                        className="dropdown-toggle nav-link"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        href="#"
                      >
                        <i className="fas fa-search" />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right p-3 animated--grow-in"
                        role="menu"
                        aria-labelledby="searchDropdown"
                      >
                        <form className="form-inline mr-auto navbar-search w-100">
                          <div className="input-group">
                            <input
                              className="bg-light form-control border-0 small"
                              type="text"
                              placeholder="Search for ..."
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-primary py-0"
                                type="button"
                              >
                                <i className="fas fa-search" />
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li
                      className="nav-item dropdown no-arrow mx-1"
                      role="presentation"
                    >
                    <li className="nav-item dropdown no-arrow">
                        <a
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        >
                          <span className="badge badge-danger badge-counter">
                            3+
                          </span>
                          <i className="fas fa-bell fa-fw" />
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <h6 className="dropdown-header">alerts center</h6>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="bg-primary icon-circle">
                                <i className="fas fa-file-alt text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">
                                December 12, 2019
                              </span>
                              <p>A new monthly report is ready to download!</p>
                            </div>
                          </a>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="bg-success icon-circle">
                                <i className="fas fa-donate text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">
                                December 7, 2019
                              </span>
                              <p>$290.29 has been deposited into your account!</p>
                            </div>
                          </a>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="mr-3">
                              <div className="bg-warning icon-circle">
                                <i className="fas fa-exclamation-triangle text-white" />
                              </div>
                            </div>
                            <div>
                              <span className="small text-gray-500">
                                December 2, 2019
                              </span>
                              <p>
                                Spending Alert: We've noticed unusually high
                                spending for your account.
                              </p>
                            </div>
                          </a>
                          <a
                            className="text-center dropdown-item small text-gray-500"
                            href="#"
                          >
                            Show All Alerts
                          </a>
                        </div>
                      </li>
                    </li>
                    <li
                      className="nav-item dropdown no-arrow mx-1"
                      role="presentation"
                    >
                      <ul className="nav-item dropdown no-arrow">
                        <a
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        >
                          <i className="fas fa-envelope fa-fw" />
                          <span className="badge badge-danger badge-counter">
                            7
                          </span>
                        </a>
                        <div
                          className="dropdown-menu dropdown-menu-right dropdown-list dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <h6 className="dropdown-header">alerts center</h6>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="dropdown-list-image mr-3">
                              <img
                                className="rounded-circle"
                                src="./static/img/avatars/avatar4.jpeg?h=fefb30b61c8459a66bd338b7d790c3d5"
                              />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate">
                                <span>
                                  Hi there! I am wondering if you can help me with
                                  a problem I've been having.
                                </span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Emily Fowler - 58m
                              </p>
                            </div>
                          </a>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="dropdown-list-image mr-3">
                              <img
                                className="rounded-circle"
                                src="./static/img/avatars/avatar2.jpeg?h=5d142be9441885f0935b84cf739d4112"
                              />
                              <div className="status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate">
                                <span>
                                  I have the photos that you ordered last month!
                                </span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Jae Chun - 1d
                              </p>
                            </div>
                          </a>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="dropdown-list-image mr-3">
                              <img
                                className="rounded-circle"
                                src="./static/img/avatars/avatar3.jpeg?h=c5166867f10a4e454b5b2ae8d63268b3"
                              />
                              <div className="bg-warning status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate">
                                <span>
                                  Last month's report looks great, I am very happy
                                  with the progress so far, keep up the good work!
                                </span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Morgan Alvarez - 2d
                              </p>
                            </div>
                          </a>
                          <a
                            className="d-flex align-items-center dropdown-item"
                            href="#"
                          >
                            <div className="dropdown-list-image mr-3">
                              <img
                                className="rounded-circle"
                                src="./static/img/avatars/avatar5.jpeg?h=35dc45edbcda6b3fc752dab2b0f082ea"
                              />
                              <div className="bg-success status-indicator" />
                            </div>
                            <div className="font-weight-bold">
                              <div className="text-truncate">
                                <span>
                                  Am I a good boy? The reason I ask is because
                                  someone told me that people say this to all
                                  dogs, even if they aren't good...
                                </span>
                              </div>
                              <p className="small text-gray-500 mb-0">
                                Chicken the Dog · 2w
                              </p>
                            </div>
                          </a>
                          <a
                            className="text-center dropdown-item small text-gray-500"
                            href="#"
                          >
                            Show All Alerts
                          </a>
                        </div>
                      </ul>
                      <div
                        className="shadow dropdown-list dropdown-menu dropdown-menu-right"
                        aria-labelledby="alertsDropdown"
                      />
                    </li>
                    <div className="d-none d-sm-block topbar-divider" />
                    <li
                      className="nav-item dropdown no-arrow"
                      role="presentation"
                    >
                      <ul className="nav-item dropdown no-arrow">
                        <a
                          className="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          aria-expanded="false"
                          href="#"
                        >
                          <span className="d-none d-lg-inline mr-2 text-gray-600 small">
                            Valerie Luna
                          </span>
                          <img
                            className="border rounded-circle img-profile"
                            src="./static/img/avatars/avatar1.jpeg?h=0ecc82101fb9a10ca459432faa8c0656"
                          />
                        </a>
                        <div
                          className="dropdown-menu shadow dropdown-menu-right animated--grow-in"
                          role="menu"
                        >
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                            &nbsp;Profile
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                            &nbsp;Settings
                          </a>
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                            &nbsp;Activity log
                          </a>
                          <div className="dropdown-divider" />
                          <a
                            className="dropdown-item"
                            role="presentation"
                            href="#"
                          >
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                            &nbsp;Logout
                          </a>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <h3 className="text-dark mb-4">Profile</h3>
                <div className="row mb-3">
                  <div className="col-lg-4">
                    <div className="card mb-3">
                      <div className="card-body text-center shadow">
                        <img
                          className="rounded-circle mb-3 mt-4"
                          src="./static/img/dogs/image2.jpeg?h=a0a7d00bcd8e4f84f4d8ce636a8f94d4"
                          width="160"
                          height="160"
                        />
                        <div className="mb-3">
                          <button
                            className="btn btn-primary btn-sm"
                            type="button"
                          >
                            Change Photo
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h6 className="text-primary font-weight-bold m-0">
                          Projects
                        </h6>
                      </div>
                      <div className="card-body">
                        <h4 className="small font-weight-bold">
                          Server migration<span className="float-right">20%</span>
                        </h4>
                        <div className="progress progress-sm mb-3">
                          <div
                            className="progress-bar bg-danger"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: '20%' }}
                          >
                            <span className="sr-only">20%</span>
                          </div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Sales tracking<span className="float-right">40%</span>
                        </h4>
                        <div className="progress progress-sm mb-3">
                          <div
                            className="progress-bar bg-warning"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: '40%' }}
                          >
                            <span className="sr-only">40%</span>
                          </div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Customer Database
                          <span className="float-right">60%</span>
                        </h4>
                        <div className="progress progress-sm mb-3">
                          <div
                            className="progress-bar bg-primary"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: '60%' }}
                          >
                            <span className="sr-only">60%</span>
                          </div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Payout Details<span className="float-right">80%</span>
                        </h4>
                        <div className="progress progress-sm mb-3">
                          <div
                            className="progress-bar bg-info"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width:"80%" }}
                          >
                            <span className="sr-only">80%</span>
                          </div>
                        </div>
                        <h4 className="small font-weight-bold">
                          Account setup
                          <span className="float-right">Complete!</span>
                        </h4>
                        <div className="progress progress-sm mb-3">
                          <div
                            className="progress-bar bg-success"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "100%"}}
                          >
                            <span className="sr-only">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="row mb-3 d-none">
                      <div className="col">
                        <div className="card text-white bg-primary shadow">
                          <div className="card-body">
                            <div className="row mb-2">
                              <div className="col">
                                <p className="m-0">Peformance</p>
                                <p className="m-0">
                                  <strong>65.2%</strong>
                                </p>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-rocket fa-2x" />
                              </div>
                            </div>
                            <p className="text-white-50 small m-0">
                              <i className="fas fa-arrow-up" />&nbsp;5% since last
                              month
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card text-white bg-success shadow">
                          <div className="card-body">
                            <div className="row mb-2">
                              <div className="col">
                                <p className="m-0">Peformance</p>
                                <p className="m-0">
                                  <strong>65.2%</strong>
                                </p>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-rocket fa-2x" />
                              </div>
                            </div>
                            <p className="text-white-50 small m-0">
                              <i className="fas fa-arrow-up" />&nbsp;5% since last
                              month
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow mb-3">
                          <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">
                              User Settings
                            </p>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="form-row">
                                <div className="col">
                                  <div className="form-group">
                                    <label for="username">
                                      <strong>Username</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="user.name"
                                      name="username"
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-group">
                                    <label for="email">
                                      <strong>Email Address</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="email"
                                      placeholder="user@example.com"
                                      name="email"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-row">
                                <div className="col">
                                  <div className="form-group">
                                    <label for="first_name">
                                      <strong>First Name</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="John"
                                      name="first_name"
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-group">
                                    <label for="last_name">
                                      <strong>Last Name</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Doe"
                                      name="last_name"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-sm"
                                  type="submit"
                                >
                                  Save Settings
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="card shadow">
                          <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">
                              Contact Settings
                            </p>
                          </div>
                          <div className="card-body">
                            <form>
                              <div className="form-group">
                                <label for="address">
                                  <strong>Address</strong>
                                </label>
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Sunset Blvd, 38"
                                  name="address"
                                />
                              </div>
                              <div className="form-row">
                                <div className="col">
                                  <div className="form-group">
                                    <label for="city">
                                      <strong>City</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Los Angeles"
                                      name="city"
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-group">
                                    <label for="country">
                                      <strong>Country</strong>
                                    </label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="USA"
                                      name="country"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <button
                                  className="btn btn-primary btn-sm"
                                  type="submit"
                                >
                                  Save&nbsp;Settings
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow mb-5">
                  <div className="card-header py-3">
                    <p className="text-primary m-0 font-weight-bold">
                      Forum Settings
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <form>
                          <div className="form-group">
                            <label for="signature">
                              <strong>Signature</strong>
                              <br />
                            </label>
                            <textarea
                              className="form-control"
                              rows="4"
                              name="signature"
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-switch">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="custom-control-label"
                                for="formCheck-1"
                              >
                                <strong>Notify me about new replies</strong>
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-sm"
                              type="submit"
                            >
                              Save Settings
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-white sticky-footer">
              <div className="container my-auto">
                <div className="text-center my-auto copyright">
                  <span>Copyright © Shakti Shakti Shaktimaan 2019</span>
                </div>
              </div>
            </footer>
          </div>
          <a className="border rounded d-inline scroll-to-top" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
        </div>
      </div>
    );
  }
}
