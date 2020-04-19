import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { NavBar } from './Components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
 
library.add(faEdit, faEye, faTrash)

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     {/* <Hello></Hello>
     <Form></Form>
     <DataGrid></DataGrid> */}
    </div>
  );
}

export default App;
