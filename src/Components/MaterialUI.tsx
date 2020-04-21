import React, { useState } from 'react';
import { Button, Paper, makeStyles,TextField } from '@material-ui/core';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export function MaterialUi() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [AstoroidName, setAstoroidName] = useState("");
    const [nasa_ipl_url, setnasa_ipl_url] = useState("");
    const [is_potentially_hazardous_asteroid, setis_potentially_hazardous_asteroid] = useState("");

    const handleSubmit = (evt : any) => {
        evt.preventDefault();
        getAstoroidData(name);
    }

    const handleRandomAsteroid = (evt : any) => {
        getRandomAsteroid();
    }

    const getAstoroidData = (AsteroidID: string) =>{
        console.log('Astoroid ID: ' + AsteroidID);
          // Make a request for a user with a given ID
          axios.get<any>(`https://api.nasa.gov/neo/rest/v1/neo/${AsteroidID}?api_key=vDhbzAN6GalHvnrGJAO4pg5t76JZqNOwntnurVVB`)
          .then(function (response) {
              // handle success
              console.log(response);
              setAstoroidName(`Astoroid Name: ${response.data.name}`);
              setnasa_ipl_url(`Nasa_ipl_url: ${response.data.nasa_jpl_url}`);
              setis_potentially_hazardous_asteroid(`Is_potentially_hazardous_asteroid: ${response.data.is_potentially_hazardous_asteroid}`);
          })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .finally(function () {
              // always executed
          });
    }

    const getRandomAsteroid = () =>{
          // Make a request for a user with a given ID
          axios.get<any>(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=vDhbzAN6GalHvnrGJAO4pg5t76JZqNOwntnurVVB`)
          .then(function (response) {
              // handle success
              console.log(response);
              setName(response.data.near_earth_objects[0].id);
              getAstoroidData(name);
         })
          .catch(function (error) {
              // handle error
              console.log(error);
          })
          .finally(function () {
              // always executed
          });
    }

    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <h1>
                        Asteroid Form
                    </h1>
                    <form  onSubmit={handleSubmit}
                    className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField label="Asteroid ID"
                                id="standard-size-small"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                defaultValue="Small" size="small" />
                        </div>
                        <div>
                            <br />
                        </div>
                        <div>
                            <input type="Submit" value="Submit"
                             className="btn btn-primary" disabled={name ? false : true}/>
                            <Button variant="contained" color="secondary" 
                            onClick={handleRandomAsteroid}>
                                Random Asteroid
                            </Button>
                        </div>
                    </form>
                <br></br>
                <br></br>
                {AstoroidName}
                <br></br>
                {nasa_ipl_url}
                <br></br>
                {is_potentially_hazardous_asteroid}
                </Paper>
            </div>
        </div>
    )
}