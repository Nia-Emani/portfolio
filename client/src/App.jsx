import "./App.css";
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

// Import Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const projectData = [
  {
    project: "Pantry Meals",
    description:
      "Pantry meals is a search engine that allows users to discover unique meals, based on an ingredient they already have in their kitchen.",
    imageURL: "https://via.placeholder.com/362x200",
  },
  {
    project: "Confidant",
    description:
      "Confidant is a journaling app where users can jot down their thoughts on-the-go.",
    imageURL: "https://via.placeholder.com/362x200",
  },
  {
    project: "enCapsule",
    description:
      "EnCapsule is an app that allows users to organize and keep track of the items in their closet, directly from their mobile devices.",
    imageURL: "https://via.placeholder.com/362x200",
  },
  {
    project: "Bespoke Aromas",
    description:
      "Bespoke Aromas is an app that allows users to rate their favorite luxury fragrances.",
    imageURL: "https://via.placeholder.com/362x200",
  },
];

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout />
      </Switch>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {projectData.map((project) => (
                <ProjectCard {...project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const ProjectCard = ({ project, description, imageURL }) => (
  <div className="card">
    <img className="card-img-top" src={imageURL} alt="Project Logo" />
    <div className="card-body">
      <h5 className="card-title">{project}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);
