
// ICS 472.03 - Advanced React - Assignment 4
// Ed Chu


import React, { Component } from 'react';
import CountryList from "./CountryList";

// This will execute the CountryList component; see CountryList component JS code
class Assignment4 extends Component {


    render() {
        return (

            <div className="Assignment4">

                <header className="App-header">
                    <table>
                        <thead>

                        <tr>
                            <th>Data</th>
                            <th><CountryList/></th>
                        </tr>
                        </thead>
                    </table>
                </header>
            </div>
        );
    }
}

export default Assignment4;