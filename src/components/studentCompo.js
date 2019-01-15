import React, { Component } from 'react';
import { Form, Button, Segment, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
    const errors = { name: {} };
    
    if (!values.name) {
        errors.name = {
            message: 'You need to provide Name'
        }
    }
    if (!values.phone) {
        errors.phone = {
            message: 'You need to provide a Phone number'
        }
    } else if (!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
        errors.phone = {
            message: 'Phone number must be in International format'
        }
    }
    
    if (!values.email) {
        errors.email = {
            message: 'You need to provide an Email address'
        }
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = {
            message: 'Invalid email address'
        }
    }
    return errors;
}

class StudentForm extends Component {

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <Form.Field className={classnames({ error: touched && error })}>
            <label>{label}</label>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span className="error">{error.message}</span>}
        </Form.Field>
    )

    render() {

        const { handleSubmit, pristine, submitting, loading, student } = this.props;
        return (
            <Segment>
                <Loader active={loading}> loading</Loader>
                <h1 style={{ marginTop: "1em" }}>{student._id ? 'Edit student' : 'Add New student'}</h1>
                <Form onSubmit={handleSubmit}>
                    <Field name="name" type="text" component={this.renderField} label="Name" />
                    <Field name="phone" type="text" component={this.renderField} label="Phone" />
                    <Field name="email" type="text" component={this.renderField} label="Email" />
                    <Button primary type='submit' disabled={pristine || submitting}>Save</Button>

                </Form>
            </Segment>
        )
    }
}

export default reduxForm({ form: 'student', validate })(StudentForm);