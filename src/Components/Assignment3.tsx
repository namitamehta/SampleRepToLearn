import React, { useState } from 'react'
import { createStyles, makeStyles, Theme, Paper, TextField, Button, TableContainer, Table, TableHead, TableRow, TableBody, withStyles, TableCell } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 800,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
        },
    }),
);

const useStylesTable = makeStyles({
    table: {
        //  minWidth: 700,
    },
});

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.background.default,
            },
        },
    }),
)(TableRow);

export default function Assignment3() {
    const classesTable = useStylesTable();
    const classes = useStyles();
    const [country, setCountry] = useState('');
    const [countryDtls, setCountryDtls] = useState([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    }

    const onSubmit = () => {
        axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
            .then(res => {
                const persons = res.data;
                setCountryDtls(
                    persons.map((c: any) => {
                        return {
                            capital: c.capital,
                            population: c.population,
                            latlng: c.latlng
                        };
                    })
                )
            })
            .catch(err => {
                setCountryDtls([])
            })
            .finally(() => {
                console.log(countryDtls);
            })
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <h1>Country Form</h1>
                <br></br>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" value={country}
                        label="Enter Country" variant="outlined" onChange={handleChange} />
                    <br></br> <br></br>
                    <Button variant="contained" color="primary"
                        disabled={country !== '' ? false : true}
                        onClick={onSubmit}>
                        Submit
                    </Button>
                </form>
                <br></br>
                <TableContainer component={Paper} hidden={ countryDtls.length > 0 ? false : true}>
                    <Table className={classesTable.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Capital</StyledTableCell>
                                <StyledTableCell align="right">Population</StyledTableCell>
                                <StyledTableCell align="right">latlng</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {countryDtls.map((row: any) => (
                                <StyledTableRow key={row.capital}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.capital}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.population}</StyledTableCell>
                                     <StyledTableCell align="right">{row.latlng}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}