import React, {useEffect, useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    return <div>
        {!editMode &&
        <div>
            <div onDoubleClick={activateEditMode}>{props.status || '---'}</div>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} type="text"
                   onBlur={deactivateEditMode} value={status}/>
        </div>
        }
    </div>
}

export default ProfileStatusWithHooks;