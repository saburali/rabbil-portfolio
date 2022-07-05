import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import Navbar from "../../components/navbar/Navbar";

import title_icon from '../../assets/images/learn-rabbil-icon.ico';

class Home extends Component {
    render() {
        return (
            <div>
                {/* React Helmet */}
                <Helmet>
                    <title> Rabbil Hasan </title>
                    <meta name="Rabbil Hasan" content="Rabbil Hasan - Portfolio" />
                    <link rel="icon" type="image/x-icon" href={title_icon} />
                </Helmet>

                <Navbar/>
                <h1> Home </h1>
            </div>
        );
    }
}

export default Home;