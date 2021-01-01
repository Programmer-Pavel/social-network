import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        this.updateStatus(status);
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