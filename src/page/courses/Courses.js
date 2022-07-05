import React, {Component} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {Helmet} from "react-helmet";
import title_icon from "../../assets/images/learn-rabbil-icon.ico";

class Courses extends Component {
    render() {
        return (
            <div>
                {/* React Helmet */}
                <Helmet>
                    <title> Courses </title>
                    <meta name="Rabbil Hasan" content="Rabbil Hasan - Portfolio" />
                    <link rel="icon" type="image/x-icon" href={title_icon} />
                </Helmet>

                <Navbar/>
                <h1> Courses </h1>
            </div>
        );
    }
}

export default Courses;