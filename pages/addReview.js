import React from "react";
import { review } from "../ethereum/app";
import Navbar from "./components/DashboardNavbar";
import Header from "./components/DashboardHeader";
import Footer from "./components/DashboardFooter";
import { inject, observer } from "mobx-react";
import StarRatings from "react-star-ratings";

function chunk(array, size) {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

@inject("store")
@observer
export default class AddReview extends React.Component {
  state = {
    title: "",
    content: "",
    review: "",
    rating: 1,
    hash: "",
    reviewVisible: false
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    // Initialize the state
    const { user } = this.props.store;
    this.setState({ hash: user.hash });
  }

  handleSubmit() {
    //Do something to handle the submit
    console.log(this.state);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    const { user } = this.props.store;
    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Header />
              {user.hash ? (
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
                            <p className="m-0">{this.state.content}</p>
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
