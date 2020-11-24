import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Title from "./components/Home";
import Projects from "./components/Projects";
import data from "./data.json";



function App() {
  return (
    // <Router>
     
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/" component={Home} />
    //     {/* <Route exact path="/Works" component={Works} /> */}
    //     <Route exact path="/Projects" component={Projects} />
    //   </div>
    // </Router>
    <div>
    <Title></Title>
    <Projects
            id={data.id}
            key={data.id}
            name={data.title}
            image={data.image}
            description={data.des}
            gitHub={data.gitHub}
            url={data.url}
          />
          </div>
  );
}

export default App;
