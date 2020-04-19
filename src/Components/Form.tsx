import React, { Component } from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import { Col } from 'react-bootstrap';
import { InputGroup, Button, Form } from 'react-bootstrap'

export class FormComponent extends Component<AppProps, AppState> {
    // constructor(props: any) {
    //     super(props);

    //     this.state = {
    //         name: '1abc23',
    //         comments: '',
    //         topic: 'angular'
    //     }
    // }

    // const { Formik } = formik;

    schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required(),
    });


    // private handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
    //     const value = evt.target.value;
    //     this.setState({
    //         name: value
    //     });
    // }

    // private handleCommentsChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    //     const value = evt.target.value;
    //     this.setState({
    //         comments: value
    //     });
    // }

    // private handleTopicChange(evt: React.ChangeEvent<HTMLSelectElement>) {
    //     const value = evt.target.value;
    //     this.setState({
    //         topic: value
    //     });
    // }

    // private handleSubmit(event: any) {
    //     alert(`${this.state.topic} ${this.state.comments} ${this.state.name}`)
    //     event.preventDefault();
    // }

    // render() {
    //     return (
    //         <form>
    //             <div>
    //                 <label>
    //                     Enter Name :
    //              </label>
    //                 <input type="text" value={this.state.name} onChange={e => this.handleNameChange(e)}>
    //                 </input>
    //             </div>
    //             <div>
    //                 <label>
    //                     Enter Comments :
    //              </label>
    //                 <textarea value={this.state.comments}
    //                 onChange={e => this.handleCommentsChange(e)}
    //                 ></textarea>
    //             </div>
    //             <div>
    //                 <label>
    //                     Enter Topics :
    //              </label>
    //                 <select value={this.state.topic}
    //                 onChange={e => this.handleTopicChange(e)}>
    //                     <option value="react">React</option>
    //                     <option value="angular">Angular</option>
    //                     <option value="vue">Vue</option>
    //                 </select>
    //             </div>
    //             <div>
    //                 <button type="submit" className="btn btn-success" onClick={e => this.handleSubmit(e)}>
    //                     Submit
    //                 </button>
    //             </div>
    //         </form>     
    //         )
    // }

    render() {
        return (
            <div className="Container" >
                <h2>Formik Form</h2>
                <div className="row justify-content-center">
                    <Formik
                        validationSchema={this.schema}
                        onSubmit={console.log}
                        initialValues={{
                            firstName: 'Mark',
                            lastName: 'Otto',
                            username: '',
                            city: '',
                            state: '',
                            zip: '',
                            terms: false
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
                                        <Form.Group as={Col} md="4" controlId="validationFormik01">
                                            <Form.Label>First name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="firstName"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                isValid={touched.firstName && !errors.firstName}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                                            <Form.Label>Last name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="lastName"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                isValid={touched.lastName && !errors.lastName}
                                            />

                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                                            <Form.Label>Username</Form.Label>
                                            <InputGroup>
                                                <InputGroup.Prepend>
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                </InputGroup.Prepend>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Username"
                                                    aria-describedby="inputGroupPrepend"
                                                    name="username"
                                                    value={values.username}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.username}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.username}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="City"
                                                name="city"
                                                value={values.city}
                                                onChange={handleChange}
                                                isInvalid={!!errors.city}
                                            />

                                            <Form.Control.Feedback type="invalid">
                                                {errors.city}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="State"
                                                name="state"
                                                value={values.state}
                                                onChange={handleChange}
                                                isInvalid={!!errors.state}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.state}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="3" controlId="validationFormik05">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Zip"
                                                name="zip"
                                                value={values.zip}
                                                onChange={handleChange}
                                                isInvalid={!!errors.zip}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.zip}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group>
                                        <Form.Check
                                            required
                                            name="terms"
                                            label="Agree to terms and conditions"
                                            onChange={handleChange}
                                            isInvalid={!!errors.terms}
                                            feedback={errors.terms}
                                            id="validationFormik0"
                                        />
                                    </Form.Group>
                                    <Button type="submit">Submit form</Button>
                                </Form>
                            )}
                    </Formik>
                </div>
            </div>
        )
    }
}

// export default Form

interface AppProps {
    //code related to your props goes here
}

interface AppState {
    name: string;
    comments: string;
    topic: string
}
