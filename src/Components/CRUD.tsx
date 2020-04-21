import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as yup from 'yup';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class CRUDComponent extends Component {
    actionsFormatter = (cell: any, row: any, rowIndex: number, formatExtraData: any) => {
        return (
            < div
                style={{
                    textAlign: "center",
                    cursor: "pointer",
                    lineHeight: "normal"
                }}>
                <button className="btn btn-success btn-sm "
                    onClick={() => { alert('edit'); console.log(row) }}>
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
        style: { width: '50px' }
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

    schema = yup.object({
        id: yup.number().required(),
        name: yup.string().required(),
        price: yup.number().required()
    });

    loadData(a: any) {
        console.log(a);
        this.products[0].id = 3;

        this.setState({
            products: this.products
        })
    }

    render() {
        debugger;
        return (
            <Container>
                <h1>CRUD Operation!</h1>
                <Row className="justify-content-md-center">
                    <Col md={5}>
                        <BootstrapTable keyField='id' striped hover
                            data={this.products} columns={this.columns} />
                    </Col>
                    <Col md={2}>

                    </Col>
                    {/* md={{ span: 5, offset: 2 }} */}
                    <Col md={5}>
                        <Formik
                            validationSchema={this.schema}
                            onSubmit={values => {
                                // same shape as initial values
                                this.products.push(values)
                                this.setState({
                                    products: this.products
                                });
                                console.log(this.products);
                                console.log(this.schema);
                            }}
                            enableReinitialize
                            initialValues={{
                                id: this.products[0].id,
                                name: 'Otto',
                                price: 0
                            }}
                        >
                            {({
                                handleSubmit,
                                handleChange,
                                handleBlur,
                                values,
                                touched,
                                isValid,
                                errors,
                            }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormik01">
                                                <Form.Label>Product ID</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="id"
                                                    value={values.id}
                                                    onChange={handleChange}
                                                    isValid={touched.id && !errors.id}
                                                    isInvalid={!!errors.id}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.id}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormik02">
                                                <Form.Label>Product Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                    isValid={touched.name && !errors.name}
                                                    isInvalid={!!errors.name}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.name}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Form.Row>
                                            <Form.Group as={Col} md="12" controlId="validationFormik03">
                                                <Form.Label>Product Price</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="price"
                                                    value={values.price}
                                                    onChange={handleChange}
                                                    isValid={touched.price && !errors.price}
                                                    isInvalid={!!errors.price}
                                                />
                                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.price}
                                                </Form.Control.Feedback>
                                            </Form.Group>
                                        </Form.Row>
                                        <Button type="submit" className="btn btn-success">Add Product</Button>
                                    </Form>
                                )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        )
    }
}
