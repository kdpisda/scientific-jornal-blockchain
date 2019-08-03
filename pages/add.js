import React from "react";
import Navbar from "./components/DashboardNavbar";
import { Editor } from "@tinymce/tinymce-react";
import Header from "./components/DashboardHeader";

export default class Dashboard extends React.Component {
  constructor(){
    super();
    this.state={
      resource: null,
      title: null
    }
    this.saveResource = this.saveResource.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleEditorChange = (e) => {
    this.setState({resource: e.target.getContent()})
  }

  saveResource(){
    console.log(this.state);
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div id="page-top">
        <div id="wrapper">
          <Navbar />
          <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Header />
              <div className="container-fluid">
                <div className="d-sm-flex justify-content-between align-items-center mb-4">
                  <h3 className="text-dark mb-0">Add a Resource</h3>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="form-group">
                      <label for="username">
                        <strong>Title</strong>
                      </label>
                      <input
                        className="form-control shadow mb-4"
                        type="text"
                        placeholder="Please enter the title"
                        name="title"
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="card shadow mb-4">
                      <Editor
                        apiKey='6oilfk927zaexmxx8vvo2zyy8el2i9oya4xjmclvvit7hb6x'
                        initialValue="<p>This is the initial content of the editor</p>"
                        init={{
                          plugins: "link image code",
                          toolbar:
                            "undo redo | bold italic | alignleft aligncenter alignright | code"
                        }}
                        onChange={this.handleEditorChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="fab fab_main_btn btn-primary"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Save Resource"
          onClick={this.saveResource}
        >
          <i className="fas fa-save" />
        </button>
      </div>
    );
  }
}
