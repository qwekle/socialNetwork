import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import {required} from "../../../utils/validators/validators";
import handleSubmit from "redux-form/lib/handleSubmit";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <button onClick={() => {
        }}>Save
        </button>
        {error && <div className={s.formSummaryError}>{error}</div>}
        <div>
            FullName: <Field placeholder={'fullname'} component={Input} name={'fullName'}/>
        </div>
        <div>
            Looking for a job: <Field component={Input} name={'lookingForAJob'} type={'checkbox'}/>
        </div>

        <div>My professional Skills: <Field placeholder={'My Slills'} name={'lookingForAJobDescription'}
                                            component={'textarea'}></Field>
        </div>

        <div>
            About me: <Field placeholder={'About Me'} name={'aboutMe'} component={'textarea'}></Field>
        </div>
        <div>
            Contacts: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key} : </b> <Field placeholder={key} component={Input} name={'contacts.' + key}/>
            </div>
        })}
        </div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;