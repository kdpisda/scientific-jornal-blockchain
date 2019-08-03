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
                              <p>
                                $290.29 has been deposited into your account!
                              </p>
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
                      <li className="nav-item dropdown no-arrow">
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
                                  Hi there! I am wondering if you can help me
                                  with a problem I've been having.
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
                                  Last month's report looks great, I am very
                                  happy with the progress so far, keep up the
                                  good work!
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
                      </li>
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
                      <li className="nav-item dropdown no-arrow">
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
                      </li>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">Dashboard</h3>
                  <a
                    className="btn btn-primary btn-sm d-none d-sm-inline-block"
                    role="button"
                    href="#"
                  >
                    <i className="fas fa-download fa-sm text-white-50" />
                    &nbsp;Generate Report
                  </a>
                </div>
                <div className="row">
                  <div className="col-md-6 col-xl-3 mb-4">
                    <div className="card shadow border-left-primary py-2">
                      <div className="card-body">
                        <div className="row align-items-center no-gutters">
                          <div className="col mr-2">
                            <div className="text-uppercase text-primary font-weight-bold text-xs mb-1">
                              <span>Earnings (monthly)</span>
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
                              <span>Earnings (annual)</span>
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
                              <span>Tasks</span>
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
                  <div className="col-lg-7 col-xl-8">
                    <div className="card shadow mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">
                          Earnings Overview
                        </h6>
                        <div className="dropdown no-arrow">
                          <button
                            className="btn btn-link btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                          >
                            <i className="fas fa-ellipsis-v text-gray-400" />
                          </button>
                          <div
                            className="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                            role="menu"
                          >
                            <p className="text-center dropdown-header">
                              dropdown header:
                            </p>
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Action
                            </a>
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas data-bs-chart='{"type":"line","data":{"labels":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],"datasets":[{"label":"Earnings","fill":true,"data":["0","10000","5000","15000","10000","20000","15000","25000"],"backgroundColor":"rgba(78, 115, 223, 0.05)","borderColor":"rgba(78, 115, 223, 1)"}]},"options":{"maintainAspectRatio":false,"legend":{"display":false},"title":{},"scales":{"xAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"],"drawOnChartArea":false},"ticks":{"fontColor":"#858796","padding":20}}],"yAxes":[{"gridLines":{"color":"rgb(234, 236, 244)","zeroLineColor":"rgb(234, 236, 244)","drawBorder":false,"drawTicks":false,"borderDash":["2"],"zeroLineBorderDash":["2"]},"ticks":{"fontColor":"#858796","padding":20}}]}}}' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-xl-4">
                    <div className="card shadow mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">
                          Revenue Sources
                        </h6>
                        <div className="dropdown no-arrow">
                          <button
                            className="btn btn-link btn-sm dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                            type="button"
                          >
                            <i className="fas fa-ellipsis-v text-gray-400" />
                          </button>
                          <div
                            className="dropdown-menu shadow dropdown-menu-right animated--fade-in"
                            role="menu"
                          >
                            <p className="text-center dropdown-header">
                              dropdown header:
                            </p>
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Action
                            </a>
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              className="dropdown-item"
                              role="presentation"
                              href="#"
                            >
                              &nbsp;Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="chart-area">
                          <canvas data-bs-chart='{"type":"doughnut","data":{"labels":["Direct","Social","Referral"],"datasets":[{"label":"","backgroundColor":["#4e73df","#1cc88a","#36b9cc"],"borderColor":["#ffffff","#ffffff","#ffffff"],"data":["50","30","15"]}]},"options":{"maintainAspectRatio":false,"legend":{"display":false},"title":{}}}' />
                        </div>
                        <div className="text-center small mt-4">
                          <span className="mr-2">
                            <i className="fas fa-circle text-primary" />
                            &nbsp;Direct
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-success" />
                            &nbsp;Social
                          </span>
                          <span className="mr-2">
                            <i className="fas fa-circle text-info" />
                            &nbsp;Refferal
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card shadow mb-4">
                      <div class="card-header py-3">
                        <h6 class="text-primary font-weight-bold m-0">
                          Projects
                        </h6>
                      </div>
                      <div class="card-body">
                        <h4 class="small font-weight-bold">
                          Server migration<span class="float-right">20%</span>
                        </h4>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar bg-danger"
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "20%" }}
                          >
                            <span class="sr-only">20%</span>
                          </div>
                        </div>
                        <h4 class="small font-weight-bold">
                          Sales tracking<span class="float-right">40%</span>
                        </h4>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar bg-warning"
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "40%" }}
                          >
                            <span class="sr-only">40%</span>
                          </div>
                        </div>
                        <h4 class="small font-weight-bold">
                          Customer Database<span class="float-right">60%</span>
                        </h4>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar bg-primary"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          >
                            <span class="sr-only">60%</span>
                          </div>
                        </div>
                        <h4 class="small font-weight-bold">
                          Payout Details<span class="float-right">80%</span>
                        </h4>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar bg-info"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          >
                            <span class="sr-only">80%</span>
                          </div>
                        </div>
                        <h4 class="small font-weight-bold">
                          Account setup
                          <span class="float-right">Complete!</span>
                        </h4>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar bg-success"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "100%" }}
                          >
                            <span class="sr-only">100%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card shadow mb-4">
                      <div class="card-header py-3">
                        <h6 class="text-primary font-weight-bold m-0">
                          Todo List
                        </h6>
                      </div>
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                          <div class="row align-items-center no-gutters">
                            <div class="col mr-2">
                              <h6 class="mb-0">
                                <strong>Lunch meeting</strong>
                              </h6>
                              <span class="text-xs">10:30 AM</span>
                            </div>
                            <div class="col-auto">
                              <div class="custom-control custom-checkbox">
                                <input
                                  class="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-1"
                                />
                                <label
                                  class="custom-control-label"
                                  for="formCheck-1"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row align-items-center no-gutters">
                            <div class="col mr-2">
                              <h6 class="mb-0">
                                <strong>Lunch meeting</strong>
                              </h6>
                              <span class="text-xs">11:30 AM</span>
                            </div>
                            <div class="col-auto">
                              <div class="custom-control custom-checkbox">
                                <input
                                  class="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-2"
                                />
                                <label
                                  class="custom-control-label"
                                  for="formCheck-2"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item">
                          <div class="row align-items-center no-gutters">
                            <div class="col mr-2">
                              <h6 class="mb-0">
                                <strong>Lunch meeting</strong>
                              </h6>
                              <span class="text-xs">12:30 AM</span>
                            </div>
                            <div class="col-auto">
                              <div class="custom-control custom-checkbox">
                                <input
                                  class="custom-control-input"
                                  type="checkbox"
                                  id="formCheck-3"
                                />
                                <label
                                  class="custom-control-label"
                                  for="formCheck-3"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col">
                    <div class="row">
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-primary shadow">
                          <div class="card-body">
                            <p class="m-0">Primary</p>
                            <p class="text-white-50 small m-0">#4e73df</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-success shadow">
                          <div class="card-body">
                            <p class="m-0">Success</p>
                            <p class="text-white-50 small m-0">#1cc88a</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-info shadow">
                          <div class="card-body">
                            <p class="m-0">Info</p>
                            <p class="text-white-50 small m-0">#36b9cc</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-warning shadow">
                          <div class="card-body">
                            <p class="m-0">Warning</p>
                            <p class="text-white-50 small m-0">#f6c23e</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-danger shadow">
                          <div class="card-body">
                            <p class="m-0">Danger</p>
                            <p class="text-white-50 small m-0">#e74a3b</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 mb-4">
                        <div class="card text-white bg-secondary shadow">
                          <div class="card-body">
                            <p class="m-0">Secondary</p>
                            <p class="text-white-50 small m-0">#858796</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
