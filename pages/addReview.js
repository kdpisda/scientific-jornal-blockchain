import React from "react";
import { review } from "../ethereum/app";
import Navbar from "./components/DashboardNavbar";
import Header from "./components/DashboardHeader";
import Footer from "./components/DashboardFooter";
import { inject, observer } from "mobx-react";
import StarRatings from "react-star-ratings";
import Loader from "../utils/loader";
import { runInAction, toJS } from "mobx";

@inject("store")
@observer
export default class AddReview extends React.Component {
  state = {
    title: "",
    content: "",
    review: "",
    rating: 1,
    hash: "",
    reviewVisible: false,
    isLoading: true,
    resources: "",
    index: ""
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
    // this.getResource = this.getResource.bind(this);
  }

  async getResource() {
    const { user, ui } = this.props.store;
    ui.isLoading = true;
    console.log(user);
    await review
      .getFileFromHash(user.address, this.state.hash)
      .then(res => {
        console.log(res);
        this.setState({ title: res[0] });
        this.setState({
          content: Buffer.from(this.state.hash, "base64").toString("ascii")
        });
        this.setState({ rating: parseInt(res[1], 16) });
        ui.isLoading = false;
      })
      .catch(e => {
        console.log("-----------------", e);
        ui.isLoading = false;
      });
    ui.isLoading = false;
  }

  handleSubmit() {
    const { user } = this.props.store;
    for (var i = 0; i < this.state.resources.length; i++) {
      if (this.state.resources[i].hash == this.state.hash) {
        this.setState({ index: i });
        break;
      }
    }
    review
      .addComments(
        user.address,
        this.state.hash,
        this.state.review,
        this.state.rating
      )
      .then(function(res) {
        console.log(res);
      });
  }

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

  componentDidMount() {
    // Initialize the state
    const { ui } = this.props.store;
    this.setState({ hash: this.state.hash });
    this.getAllResourcesFromBlockChain().then(response =>
      runInAction(() => {
        ui.fetchList = true;
      })
    );
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    const { user, ui } = this.props.store;
    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Header />
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card shadow mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary font-weight-bold m-0">
                          Enter Your Hash
                        </h6>
                      </div>
                      <div className="card-body" style={{ padding: 0 }}>
                        <input
                          className="form-control"
                          style={{ margin: 0, border: 0 }}
                          name="hash"
                          onChange={event => {
                            this.setState({ hash: event.target.value });
                            console.log(this.state);
                            this.getResource();
                          }}
                          value={this.state.hash}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {this.state.hash && !ui.isLoading ? (
                <div>
                  <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                      <h3 className="text-dark mb-0">Review a Resource</h3>
                      <button
                        className="btn btn-primary btn-sm d-none d-sm-inline-block text-white"
                        role="button"
                        onClick={this.handleSubmit}
                      >
                        <i className="fas fa-check-circle" />
                        &nbsp;Submit
                      </button>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="card shadow mb-4">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary font-weight-bold m-0">
                              {this.state.title}
                            </h6>
                          </div>
                          <div className="card-body">
                            <div className="m-0">{this.state.content}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="card shadow mb-4">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary font-weight-bold m-0">
                              Add Your Review
                            </h6>
                          </div>
                          <div className="card-body" style={{ padding: 0 }}>
                            <textarea
                              className="form-control"
                              style={{ margin: 0, border: 0 }}
                              name="review"
                              onChange={event => {
                                this.setState({ review: event.target.value });
                              }}
                              value={this.state.review}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-12">
                        <div className="card shadow mb-4 align-items-center align-content-center align-self-center">
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <h6 className="text-primary font-weight-bold m-0">
                              Please rate this resource
                            </h6>
                          </div>
                          <center>
                            <div className="card-body">
                              <StarRatings
                                rating={this.state.rating}
                                starRatedColor="blue"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name="rating"
                              />
                            </div>
                          </center>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container-fluid">
                  <div className="d-sm-flex justify-content-center align-items-center mb-4">
                    <h3 className="text-dark mb-0">
                      Please enter a hash in the search box to retrieve the
                      paper
                    </h3>
                  </div>
                  <Loader />
                </div>
              )}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
