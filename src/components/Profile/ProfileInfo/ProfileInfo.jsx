import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "./../../../assets/images/user.png";
import UserContactsForm from "./UserContactsForm";

const ProfileInfo = ({profile, updateStatus, status, savePhoto, isOwner, saveProfile}) => {

    const [editMode, setEditMode] = useState();

    if (!profile) {
        return (<Preloader/>)
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
    }

    return (
        <div>
            <div className={s.description}>
                <img src={profile.photos.large || userPhoto} className={s.userPhoto}/>
                <div>{isOwner && <input type="file"
                                        onChange={onMainPhotoSelected}/>}</div>

                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}/>

                {editMode ? <UserContactsForm profile={profile}
                                              onSubmit={onSubmit}/> : <UserContacts profile={profile}
                                                                                    isOwner={isOwner}
                                                                                    activateEditMode={() => {
                                                                                        setEditMode(true)
                                                                                    }}/>}

            </div>
        </div>
    )
}

const UserContacts = ({profile, isOwner, activateEditMode}) => {
    return <>
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>}
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
        <div>
            {isOwner && <button onClick={activateEditMode}>edit</button>}
        </div>
    </>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;