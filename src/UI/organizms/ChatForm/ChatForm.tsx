import React from 'react';
import {InputHTMLAttributes} from "react";
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import Input from "../../atoms/Input";


const useStyles = makeStyles(styles);

const ChatForm = () => {

    const classes = useStyles();
    return (<><div
        className={classes.inputWrapper}
    >
        <Input/>
    </div>
    </>);
};



export default ChatForm;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}
