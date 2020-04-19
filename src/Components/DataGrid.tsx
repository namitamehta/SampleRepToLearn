import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';

export class DataGrid extends Component {

    actionsFormatter = (cell: any, row: any, rowIndex: number, formatExtraData: any) => {
        return (
            < div
                style={{
                    textAlign: "center",
                    cursor: "pointer",
                    lineHeight: "normal"
                }}>
                <button className="btn btn-success btn-sm " onClick={() => {alert('edit'); console.log(row)}}
                >
                    <FontAwesomeIcon icon="edit" />
                </button>
                <Button className="btn btn-info btn-sm" onClick={() => this.loadData(row)}>
                    <FontAwesomeIcon icon="eye" />
                    </Button>
                <button className="btn btn-danger btn-sm"
                 onClick={() => this.loadData(row)} >
                    <FontAwesomeIcon icon="trash" />
                    </button >
            </div >
        );
    }

    products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, {
        id: 2,
        name: "Product2",
        price: 80
    },
    {
        id: 3,
        name: "Product3",
        price: 220
    }, {
        id: 4,
        name: "Product4",
        price: 180
    }];
    columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true,
        style: {width: '50px'}
    }, {
        dataField: 'name',
        text: 'Product Name'
    }, {
        dataField: 'price',
        text: 'Product Price'
    },
    {
        dataField: 'action',
        text: 'Action',
        isDummyField: true,
        formatter: this.actionsFormatter,
        headerStyle: () => {
            return { width: '40%' };
          }
    }];

    loadData = (a : any) => {
        alert('Hello');
        console.log('Edit button click');
    }

    render() {
        return (
            <div>
            <h1>React Bootstrap Table Next!</h1>
            <BootstrapTable keyField='id' striped hover
            data={this.products} columns={this.columns} />
            </div>
        )
    }
}
