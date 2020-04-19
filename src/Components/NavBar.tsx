import React, { Component } from 'react'
import {Navbar , Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Hello } from './hello';
import { DataGrid } from './DataGrid';
import { FormComponent } from './Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CRUDComponent } from './CRUD';

export class NavBar extends Component {
    render() {
        return (
            <Router>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                <Link to={'/'} className="nav-link"> Home </Link>
                <Link to={'/CRUD'} className="nav-link"> CRUD </Link>
                <Link to={'/Grid'} className="nav-link"> DataGrid </Link>
                <Link to={'/Form'} className="nav-link"> Form </Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <Switch>
            <Route exact path='/' component={Hello} />
            <Route exact path='/Grid' component={DataGrid} />
            <Route exact path='/Form' component={FormComponent} />
            <Route exact path='/CRUD' component={CRUDComponent} />
          </Switch>
            </Router>
        )
    }
}

