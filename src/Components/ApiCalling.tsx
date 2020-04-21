import React, { Component } from 'react';
import axios from "axios";

export class ApiCalling extends Component {
    loadData() {
        // Make a request for a user with a given ID
        axios.get<any>('https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=vDhbzAN6GalHvnrGJAO4pg5t76JZqNOwntnurVVB')
            .then(function (response) {
                // handle success
                console.log(response);
                console.log(response.data.is_potentially_hazardous_asteroid)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

        axios.get<any>('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=vDhbzAN6GalHvnrGJAO4pg5t76JZqNOwntnurVVB')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    render() {
        return (
            <div>
                <h1>Api Calling</h1>
                <div>
                    <button className="btn btn-success btn-sm "
                        onClick={() => this.loadData()}>
                        GET
                </button>
                    <button className="btn btn-info btn-sm" onClick={() => this.loadData()}>
                        UPDATE
                </button>
                    <button className="btn btn-danger btn-sm"
                        onClick={() => this.loadData()} >
                        DELETE
                </button >
                </div>
                
            </div>
        )
    }
}
