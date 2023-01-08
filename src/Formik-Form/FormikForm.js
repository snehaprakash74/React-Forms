import React, { Component } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

class FormikForm extends Component {
    state={
        userName:'',
        email:'',
        password:'',
        confirmPassword:'',
        isValid:false,
    }

    handleChange=(values)=>{
        this.setState({
            userName:values.userName,
            email:values.email,
            password:values.password,
            confirmPassword:values.confirmPassword
        })
    }

    validationSchema = Yup.object().shape({
        userName: Yup.string()
          .min(6,"Username should be between 6 & 15 character")
          .max(15,"Username should be between 6 & 15 character")
          .required("Username is required"),
        email:Yup.string()
            .email("invalid email address")
            .required("Email is required"),
        password:Yup.string()
        .min(8,"It should be atleast 8 character")
        .required("password is required"),
        confirmPassword:Yup.string()
        .oneOf([Yup.ref('password'),null ],"password doesnt match")
    })
    render() {
        return (
            <div>
                <h1>Formik form with Yup</h1>


                <Formik
                    initialValues={{ userName:'', email:'', password:'', confirmPassword:'', isSubmitting: true }}
                    validationSchema={this.validationSchema}
                    onSubmit={(values,{setSubmitting,resetForm})=>(
                        setTimeout(()=>{
                            console.log(values);
                            this.setState({
                                userName:values.userName

                            })
                            setSubmitting(true)
                            resetForm()
                            setSubmitting(false)
                        } ,400)
                    )}
                >

                {({values,
                   errors,
                   touched,
                   dirty,
                   isSubmitting,
                   handleChange,
                   handleBlur,
                   handleReset,
                   handleSubmit
                }) =>(
                    <form onSubmit={handleSubmit} noValidate>

                        <div className='form-group'>
                         <label htmlFor='username'>Username</label>
                          <input className='form-control'
                                type='text'
                                name='userName'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.userName}
                            />
                            <span className='help-block text-danger ' >{errors.userName && touched.userName && errors.userName}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input
                               className='form-control'
                               type='email'
                               name='email'
                               onChange={handleChange}
                               onBlur={handleBlur}
                                value={values.email}
                            />
                           <span className='help-block text-danger ' >{errors.email && touched.email && errors.email}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input
                               className='form-control'
                               type='password'
                               name='password'
                               onChange={handleChange}
                               onBlur={handleBlur}
                                value={values.password}
                            />
                            <span className='help-block text-danger ' >{errors.password && touched.password && errors.password}</span>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='confrimPassword'>Confrim Password</label>
                            <input
                               className='form-control'
                               type='password'
                               name='confirmPassword'
                               onChange={handleChange}
                               onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            <span className='help-block text-danger ' >{errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}</span>
                        </div>
                        <div className='btn-group'>
                            <button className='btn btn-primary' type='submit' disabled={isSubmitting}>Submit</button>
                            <button
                                disabled={!dirty}
                                onClick={handleReset}
                                type='button'
                                className='btn btn-danger'>
                                    Reset

                            </button>
                        </div>
                    </form>
                 )}

                </Formik>
                <p>Username:{this.state.userName}</p>

            </div>
        );
    }
}

export default FormikForm;
