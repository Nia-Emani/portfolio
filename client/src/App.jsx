import "./App.css";
import React, { Component } from "react";
import Layout from "./components/Layout";
import { Switch } from "react-router-dom";

import { baseURL, config } from "./services";

console.log(`$(process.env.REACT_APP_PORFOLIO_APP)`);
console.log(`$(process.env.REACT_APP_PORFOLIO_KEY)`);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.airtable.com/v0/app2ehx6WkmwUOTbG/projects?api_key=keyrLcb7cHnTAOxeJ"
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ project: data.records });
        console.log(data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Layout />
        </Switch>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="card-deck">
                {this.state.project.map((project) => (
                  <ProjectCard {...project.fields} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const ProjectCard = ({ name, description, imageUrl, siteUrl }) => (
  <div className="card">
    <img className="card-img-top" src={imageUrl[0].url} alt="Project Visual" />
    <div className="card-body">
      <h5 className="card-title" key="project-name">
        {name}{" "}
      </h5>
      <p className="card-text" key="project-description">
        {description}
      </p>
      <a class="btn btn-primary" href={siteUrl} role="button" target="_blank">
        Visit the {name} site!
      </a>
    </div>
  </div>
);
