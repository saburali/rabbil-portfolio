import React, {Component} from 'react';
import Navbar from "../../components/navbar/Navbar";
import {Helmet} from "react-helmet";
import title_icon from "../../assets/images/learn-rabbil-icon.ico";

class Contact extends Component {
    render() {
        return (
            <div>
                {/* React Helmet */}
                <Helmet>
                    <title> Contact </title>
                    <meta name="Rabbil Hasan" content="Rabbil Hasan - Portfolio" />
                    <link rel="icon" type="image/x-icon" href={title_icon} />
                </Helmet>

                <Navbar/>
                <h1> Contact </h1>
            </div>
        );
    }
}

export default Contact;