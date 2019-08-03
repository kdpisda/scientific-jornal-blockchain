import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div className="container-fluid d-flex flex-column p-0">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="#"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Brand</span>
            </div>
          </a>
          <hr className="sidebar-divider my-0" />
          <ul className="nav navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item" role="presentation" />
          </ul>
          <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
            <div className="container-fluid d-flex flex-column p-0">
              <hr className="sidebar-divider my-0" />
              <ul className="nav navbar-nav text-light" id="accordionSidebar">
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="index.html">
                    <i className="fas fa-tachometer-alt" />
                    <span>&nbsp;Dashboard</span>
                  </a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                  <p className="mb-0">INTERFACE</p>
                </div>
                <li className="nav-item" role="presentation">
                  <div>
                    <a
                      className="btn btn-link nav-link"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                      href="#collapse-1"
                      role="button"
                    >
                      <i className="fas fa-cog" />&nbsp;<span>Components</span>
                    </a>
                    <div className="collapse" id="collapse-1">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">CUSTOM COMPONENTS:</h6>
                        <a className="collapse-item" href="buttons.html">
                          Buttons
                        </a>
                        <a className="collapse-item" href="cards.html">
                          Cards
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <div>
                    <a
                      className="btn btn-link nav-link"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                      href="#collapse-2"
                      role="button"
                    >
                      <i className="fas fa-wrench" />&nbsp;
                      <span>Utilities</span>
                    </a>
                    <div className="collapse" id="collapse-2">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">CUSTOM UTILITIES:</h6>
                        <a
                          className="collapse-item"
                          href="utilities-color.html"
                        >
                          Colors
                        </a>
                        <a
                          className="collapse-item"
                          href="utilities-border.html"
                        >
                          Borders
                        </a>
                        <a
                          className="collapse-item"
                          href="utilities-animation.html"
                        >
                          Animations
                        </a>
                        <a
                          className="collapse-item"
                          href="utilities-other.html"
                        >
                          Other
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                  <p className="mb-0">Addons</p>
                </div>
                <li className="nav-item" role="presentation">
                  <div>
                    <a
                      className="btn btn-link nav-link"
                      data-toggle="collapse"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                      href="#collapse-3"
                      role="button"
                    >
                      <i className="fas fa-folder" />&nbsp;<span>Pages</span>
                    </a>
                    <div className="collapse" id="collapse-3">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">LOGIN SCREENS:</h6>
                        <a className="collapse-item" href="login.html">
                          Login
                        </a>
                        <a className="collapse-item" href="register.html">
                          Register
                        </a>
                        <a
                          className="collapse-item"
                          href="forgot-password.html"
                        >
                          Forgot Password
                        </a>
                        <h6 className="collapse-header">OTHER PAGES:</h6>
                        <a className="collapse-item" href="404.html">
                          404 Page
                        </a>
                        <a className="collapse-item" href="blank.html">
                          Blank Page
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapsePages"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionSidebar"
                    aria-controls="collapsePages"
                  >
                    <div className="bg-white border rounded py-2 collapse-inner">
                      <h6 className="collapse-header">LOGIN SCREENS:</h6>
                      <a className="collapse-item" href="#">
                        Login
                      </a>
                      <a className="collapse-item" href="#">
                        Register
                      </a>
                      <a className="collapse-item" href="#">
                        Forgot Password
                      </a>
                      <h6 className="collapse-header">OTHER PAGES:</h6>
                      <a className="collapse-item" href="#">
                        404 Page
                      </a>
                      <a className="collapse-item" href="#">
                        Blank Page
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="charts.html">
                    <i className="fas fa-chart-area" />
                    <span>&nbsp;Charts</span>
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="tables.html">
                    <i className="fas fa-table" />
                    <span>&nbsp;Tables</span>
                  </a>
                </li>
                <hr className="sidebar-divider" />
              </ul>
              <div className="text-center d-none d-md-inline">
                <button
                  className="btn rounded-circle border-0"
                  id="sidebarToggle"
                  type="button"
                />
              </div>
            </div>
          </nav>
          <div className="text-center d-none d-md-inline" />
        </div>
      </nav>
    );
  }
}
