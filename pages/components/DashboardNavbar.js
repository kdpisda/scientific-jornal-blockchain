import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
        <div className="container-fluid d-flex flex-column p-0">
<<<<<<< HEAD
          <a
            className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"
            href="/"
          >
=======
          <a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="/" >
>>>>>>> 21558b7c05eff06a3b5e5e1d1db35ab5ff5950b9
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-laugh-wink" />
            </div>
            <div className="sidebar-brand-text mx-3">
              <span>Journal</span>
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
                  <a className="nav-link" href="/dashboard">
                    <i className="fas fa-tachometer-alt" />
                    <span>&nbsp;Dashboard</span>
                  </a>
                </li>
                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                  <p className="mb-0">My Activities</p>
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
                      <i className="fas fa-mail-bulk" />
                      &nbsp;
                      <span>Resources</span>
                    </a>
                    <div className="collapse" id="collapse-1">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">My Resources</h6>
                        <a className="collapse-item" href="/add">
                          Add a Resource
                        </a>
                        <a className="collapse-item" href="/resources">
                          All Resources
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
                      <i className="fas fa-book-reader" />
                      &nbsp;
                      <span>Browse</span>
                    </a>
                    <div className="collapse" id="collapse-2">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">
                          Search in Open Journal
                        </h6>
                        <a
                          className="collapse-item"
                          href="utilities-color.html"
                        >
                          Posts
                        </a>
                        <a
                          className="collapse-item"
                          href="utilities-border.html"
                        >
                          Research Papers
                        </a>
                        <a
                          className="collapse-item"
                          href="utilities-animation.html"
                        >
                          Art
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
                  <p className="mb-0">Settings</p>
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
                      <i className="fas fa-user" />
                      &nbsp;<span>Profile</span>
                    </a>
                    <div className="collapse" id="collapse-3">
                      <div className="bg-white border rounded py-2 collapse-inner">
                        <h6 className="collapse-header">Auth</h6>
                        <a className="collapse-item" href="login.html">
                          Profile Settings
                        </a>
                        <h6 className="collapse-header">Others</h6>
                        <a className="collapse-item" href="404.html">
                          Payment Methods
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
                      <h6 className="collapse-header">Auth</h6>
                      <a className="collapse-item" href="#">
                        Profile
                      </a>
                      <a className="collapse-item" href="#">
                        Settings
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
