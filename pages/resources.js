import React from "react";
import { review } from "../ethereum/app";
import Navbar from "./components/DashboardNavbar";
import Header from "./components/DashboardHeader";
import Footer from "./components/DashboardFooter";
import { inject } from "mobx-react";

var tempData = [
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  },
  {
    title: "Hakima Matatu",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
];

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
  constructor() {
    super();
  }

  render() {
    return (
      <div className="row">
        {this.props.data.map(function(resource, idx) {
          return (
            <div className="col">
              <div className="card shadow mb-4" key={idx}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h6 className="text-primary font-weight-bold m-0">
                    {resource.title}
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
                      <a className="dropdown-item" role="presentation" href="#">
                        &nbsp;View
                      </a>
                      <a className="dropdown-item" role="presentation" href="#">
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
                  <p className="m-0">{resource.content}</p>
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
export default class Resource extends React.Component {
  constructor() {
    super();
    this.getAllResources = this.getAllResources.bind(this);
  }

  state = {
    resources: tempData
  };

  async getAllResourcesFromBlockChain() {
    const { user } = this.props.store;
    let i,
      list = [];
    for (i = 0; i < user.details.fileCount; i++) {
      review.getUserFilebyIndex(user.address, i).then(file => {
        list.push({
          id: i,
          name: file[1],
          hash: file[0],
          rating: file[2]
        });
      });
    }

    return list;
  }

  getAllResources() {
    var chunckedAry = chunk(this.state.resources, 3);
    return chunckedAry;
  }

  componentDidMount() {
    // this.getAllResourcesFromBlockChain(r => console.log(r)).catch(r =>
    //   console.log(r)
    // );
    const { user } = this.props.store;
    review.getUserFilebyIndex(user.address, 0);
  }

  render() {
    var resources = this.getAllResources();
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
                {resources.map(function(resource, idx) {
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
