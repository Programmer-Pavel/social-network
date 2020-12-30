import React from 'react';
import styles from './FormControls.module.css';

export const FormControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            {React.createElement(element, {...input, ...props})}
        </div>
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>
}

export const TextArea = (props) => {
    return <FormControl {...props} element="textarea"></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props} element="input"></FormControl>
}