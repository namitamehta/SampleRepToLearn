import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Col } from 'react-bootstrap';
import { InputGroup, Button, Form } from 'react-bootstrap'

// export class CRUDFormComponent extends Component<{ ID: number}> {
export function CRUDFormComponent() {
 
   const products = [{
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

  const schema = yup.object({
        id: yup.number().required(),
        name: yup.string().required(),
        price: yup.number().required()
    });

   // render() {
        return (
            <div>Hi</div>
            // <div className="Container" >
            //     <div className="row justify-content-center">
            //     <Formik
            //                 validationSchema={this.schema}
            //                 onSubmit={values => {
            //                     // same shape as initial values
            //                     this.products.push(values);
            //                     console.log(this.products);
            //                     console.log(this.schema);
            //                 }}
            //                 enableReinitialize={true} // missing piece!!
            //                 initialValues={{
            //                     id: this.props.ID,
            //                     name: 'Otto',
            //                     price: 0
            //                 }}
            //             >
            //                 {({
            //                     handleSubmit,
            //                     handleChange,
            //                     handleBlur,
            //                     values,
            //                     touched,
            //                     isValid,
            //                     errors,
            //                 }) => (
            //                         <Form noValidate onSubmit={handleSubmit}>
            //                             <Form.Row>
            //                                 <Form.Group as={Col} md="12" controlId="validationFormik01">
            //                                     <Form.Label>Product ID</Form.Label>
            //                                     <Form.Control
            //                                         type="text"
            //                                         name="id"
            //                                         value={values.id}
            //                                         onChange={handleChange}
            //                                         isValid={touched.id && !errors.id}
            //                                         isInvalid={!!errors.id}
            //                                     />
            //                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //                                     <Form.Control.Feedback type="invalid">
            //                                         {errors.id}
            //                                     </Form.Control.Feedback>
            //                                 </Form.Group>
            //                             </Form.Row>
            //                             <Form.Row>
            //                                 <Form.Group as={Col} md="12" controlId="validationFormik02">
            //                                     <Form.Label>Product Name</Form.Label>
            //                                     <Form.Control
            //                                         type="text"
            //                                         name="name"
            //                                         value={values.name}
            //                                         onChange={handleChange}
            //                                         isValid={touched.name && !errors.name}
            //                                         isInvalid={!!errors.name}
            //                                     />
            //                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //                                     <Form.Control.Feedback type="invalid">
            //                                         {errors.name}
            //                                     </Form.Control.Feedback>
            //                                 </Form.Group>
            //                             </Form.Row>
            //                             <Form.Row>
            //                                 <Form.Group as={Col} md="12" controlId="validationFormik03">
            //                                     <Form.Label>Product Price</Form.Label>
            //                                     <Form.Control
            //                                         type="text"
            //                                         name="price"
            //                                         value={values.price}
            //                                         onChange={handleChange}
            //                                         isValid={touched.price && !errors.price}
            //                                         isInvalid={!!errors.price}
            //                                     />
            //                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            //                                     <Form.Control.Feedback type="invalid">
            //                                         {errors.price}
            //                                     </Form.Control.Feedback>
            //                                 </Form.Group>
            //                             </Form.Row>
            //                             <Button type="submit" className="btn btn-success">Add Product</Button>
            //                         </Form>
            //                     )}
            //             </Formik>
            //     </div>
            // </div>
        )
 //   }
}
