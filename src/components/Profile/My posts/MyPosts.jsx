import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'post message'} component={TextArea}
                   name={'postmessage'} validate={[required, maxLength10]}></Field>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const PostReduxForm = reduxForm({
    form: 'postmessage'
})(PostForm)

const MyPosts = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    let addNewPost = (values) => {
        props.addPost(values.postmessage)
    }

    const postElements = props.posts.map(p => <Post message={p.message} count={p.count}/>);

    return (
        <div className={s.postBlock}>
            My posts
            <PostReduxForm onSubmit={addNewPost}/>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;