import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';


const TaskFormComponent = () => {

    let task = new Task();

    const initValues = {
        name: '',
        description: '',
        level: LEVELS.NORMAL
    };

    const taskFormSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name too short')
            .max(12, 'Name too long')
            .required('Name is required'),
        description: Yup.string()
            .min(3, 'Description too short')
            .max(30, 'Description too long')
            .required('Description is required'),
        level: Yup.string()
            .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a level: Normal / Urgent, Blocking')
            .required('Level is required')
    });

    const onSubmit = (values, {setSubmitting}) => {
        alert(`Created task: ${JSON.stringify(values)}`);
    };

    return (
        <div>
            <h1> Task form with Formik and Yup </h1>
            <Formik 
                initialValues={initValues}
                formSchema = {taskFormSchema}
                onSubmit={onSubmit}
            >
                {({
                    errors,
                    touched,
                    isSubmitting,
                    /* and other goodies */
                }) => (  
                    <Form>
                        <label htmlFor="name">
                            Name
                        </label>
                        <Field className="form-control" id="name" type="text" name="name" placeholder="Name of the task"/>
                        {
                            errors.name && touched.name && (
                                <ErrorMessage name="name" component='div' className="field-error text-danger">
                                </ErrorMessage>
                            )
                        }
                        <label htmlFor="description">
                            Description
                        </label>
                        <Field className="form-control" id="description" type="text" name="description" placeholder="Description of the task"/>
                        {
                            errors.description && touched.description && (
                                <ErrorMessage name="description" component='div' className="field-error text-danger">
                                </ErrorMessage>
                            )
                        }
                        <label htmlFor="level">
                            Level
                        </label>
                        <Field as="select" className="form-control" name="level">
                            <option value={LEVELS.NORMAL}>
                                Normal
                            </option>
                            <option value={LEVELS.URGENT}>
                                Urgent
                            </option>
                            <option value={LEVELS.BLOCKING}>
                                Blocking
                            </option>
                        </Field>
                        {
                            errors.select && touched.select && (
                                <ErrorMessage name="level" component='div' className="field-error text-danger">
                                </ErrorMessage>
                            )
                        }
                        <button type="submit">
                            Create task
                        </button>
                        {
                            isSubmitting ? 
                                (<p>Sending the new task...</p>) : 
                                null
                        }
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskFormComponent;
