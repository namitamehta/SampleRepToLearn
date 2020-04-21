import React, { Component } from 'react'
import {Navbar , Nav, Form, FormControl, Button} from 'react-bootstrap'
import { Hello } from './hello';
import { DataGrid } from './DataGrid';
import { FormComponent } from './Form';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CRUDComponent } from './CRUD';
import { ApiCalling } from './ApiCalling';
import { MaterialUi } from './MaterialUI';
import MaterialGridWithPagination from './MaterialGridWithPagination';
import Assignment3 from './Assignment3';

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
                <Link to={'/ApiCalling'} className="nav-link"> Api Calling </Link>
                <Link to={'/MaterialGridWithPagination'} className="nav-link"> Assignment1 </Link>                
                <Link to={'/MaterialUi'} className="nav-link"> Assignment2 </Link>
                <Link to={'/Assignment3'} className="nav-link"> Assignment3 </Link>                
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
            <Route exact path='/ApiCalling' component={ApiCalling} />
            <Route exact path='/MaterialUi' component={MaterialUi} />
            <Route exact path='/MaterialGridWithPagination' component={MaterialGridWithPagination} />            
            <Route exact path='/Assignment3' component={Assignment3} />            
          </Switch>
            </Router>
        )
    }
}

