import React, {Component, Fragment} from 'react';
// import './assets/css/App.css';
import { Routes, Route} from "react-router-dom";

import Home from "./page/home/Home";
import About from "./page/about/About";
import Courses from "./page/courses/Courses";
import Contact from "./page/contact/Contact";
import Join from "./page/join/Join";

class App extends Component {
    render() {
        return (
            <Fragment>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/join" element={<Join />} />
                    </Routes>
            </Fragment>
        );
    }
}

export default App;