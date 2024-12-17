import "./App.css";
import Home from "./home/Home";
import About from "./inner/About";
import Service from "./inner/Service";
import ServiceDetails from "./inner/ServiceDetails";
import Blog from "./inner/Blog";
import BlogDetails from "./inner/BlogDetails";
import ProjectMesonaryThree from "./inner/ProjectMesonaryThree";
import ProjectDetails from "./inner/ProjectDetails";
import TeamOne from "./inner/TeamOne";
import TeamDetails from "./inner/TeamDetails";
import FaqOne from "./inner/FaqOne";
import Error from "./inner/Error";
import Contact from "./inner/Contact";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadTop from "./components/LoadTop";
import BackTop from "./components/BackTop";
import CurrentLink from "./components/CurrentLink";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div className="App">
      <Router>
        <LoadTop />
        <CurrentLink />
        <BackTop />

        <Preloader />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/ServiceDetails" element={<ServiceDetails />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/BlogDetails" element={<BlogDetails />}></Route>
          <Route path="/Product" element={<ProjectMesonaryThree />}></Route>
          <Route path="/ProductDetails" element={<ProjectDetails />}></Route>
          <Route path="/TeamOne" element={<TeamOne />}></Route>
          <Route path="/TeamDetails" element={<TeamDetails />}></Route>
          <Route path="/FaqOne" element={<FaqOne />}></Route>
          <Route path="/Error" element={<Error />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
