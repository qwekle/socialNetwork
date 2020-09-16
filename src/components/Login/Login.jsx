import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css'

const maxLength30 = maxLengthCreator(30)
const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field component={Input} validate={[required, maxLength30]} name={'email'} placeholder={'email'}/></div>
                <div><Field component={Input} validate={[required, maxLength30]} name={'password'} type={'password'} placeholder={'password'}/></div>
                <div><Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me</div>
                {props.error && <div className={s.formSummaryError}>{props.error}</div>}
                <div><button>Login</button></div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);