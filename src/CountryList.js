
// data fetch and formatting
import React from 'react';
import axios from 'axios';
export default class CountryList extends React.Component {
    state =
        {
            country: [],
            isocode: [],
            capital: [],
            regionWorld: [],

        }

    componentDidMount() {
        // For the purpose of this exercise we will pull JSON data from
        // World Bank with country set as Belgium.
        const url = 'http://api.worldbank.org/v2/country/be?format=json';
        // Axios is used to acquire information from World Bank API URL
        // For this example "be" for Belgium is used.
        axios.get(url,
            {
                // Headers set to allow cross origin - note, may not work in all cases.
                // Had to run this in Chrome with web security disabled
            method: 'GET',
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': true
            },
            }
            )
            // Acquire data for country, ISO core, capital and region of the world.
            .then(response => {
                this.setState({  country: response.data[1][0].name });
                this.setState({ isocode: response.data[1][0].iso2Code});
                this.setState({ capital: response.data[1][0].capitalCity});
                this.setState({ regionWorld: response.data[1][0].region.value});

            })
    }


    // Now return the result to the webpage
    render() {       
        return (
           <ul>
               <li>Country: {this.state.country}</li>
               <li>ISO code: {this.state.isocode}</li>
               <li>Capital: {this.state.capital}</li>
               <li>Region of the world: {this.state.regionWorld}</li>
           </ul>
        )

    }
}