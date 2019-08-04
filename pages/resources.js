import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { review } from "../ethereum/app";
import Navbar from "./components/DashboardNavbar";
import Header from "./components/DashboardHeader";
import Footer from "./components/DashboardFooter";
import { inject, observer } from "mobx-react";
import { runInAction, toJS } from "mobx";
import LoaderClass from "../utils/loader";

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

class ResourceRow extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map(function(resource, idx) {
          return (
            <div className="col">
              <div className="card shadow mb-4" key={idx}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h6 className="text-primary font-weight-bold m-0">
                    {resource.name}
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
                        Quick Actions:
                      </p>

                      <CopyToClipboard text={resource.hash}>
                        <a className="dropdown-item" role="presentation">
                          <span>&nbsp;Copy</span>
                        </a>
                      </CopyToClipboard>
                      <a
                        className="dropdown-item"
                        role="presentation"
                        href="#"
                        disabled
                      >
                        &nbsp;Edit
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item danger"
                        role="presentation"
                        href="#"
                      >
                        &nbsp;Delete
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div
                    className="m-0"
                    dangerouslySetInnerHTML={{
                      __html: Buffer.from(resource.hash, "base64").toString(
                        "ascii"
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

@inject("store")
@observer
export default class Resource extends React.Component {
  constructor() {
    super();
    this.getAllResources = this.getAllResources.bind(this);
  }

  state = {
    resources: []
  };

  async getAllResourcesFromBlockChain() {
    const { user, ui } = this.props.store;
    let i,
      list = [];
    ui.isLoading = true;

    if (ui.fetchedFromPersist) {
      let count = await review.getUserFileLength(user.address);
      count = parseInt(count._hex);
      for (i = 0; i < count; i++) {
        review.getUserFilebyIndex(user.address, i).then(file => {
          list.push({
            id: i,
            name: file[1],
            hash: file[0],
            rating: file[2]
          });
          this.setState({ resources: list });
          ui.isLoading = false;
        });
      }
      if (count == 1) ui.isLoading = false;
    }
  }

  getAllResources() {
    var chunckedAry = chunk(this.state.resources, 3);
    return chunckedAry;
  }

  componentWillMount() {
    const { ui } = this.props.store;
    this.getAllResourcesFromBlockChain().then(response =>
      runInAction(() => {
        ui.fetchList = true;
      })
    );
  }

  render() {
    const { ui } = this.props.store;

    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <h3 className="text-dark mb-1">My Resources</h3>
                <br />
              </div>
              <div className="container">
                {ui.isLoading && <LoaderClass />}
                {ui.fetchedFromPersist &&
                  chunk(this.state.resources, 3).map(function(resource, idx) {
                    return <ResourceRow key={idx} data={resource} />;
                  })}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
