import React from 'react';
import {InputHTMLAttributes} from "react";
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import Input from "../../atoms/Input";
import Button from '../../atoms/Button';

const useStyles = makeStyles(styles);

const ChatForm = () => {

    const classes = useStyles();
    return (<div className={classes.root}>
        <div
        className={classes.inputWrapper}
    >
        <Input/>
        </div>
        <div
            className={classes.buttonWrapper}
        >
            <Button>Send</Button>
        </div>
    </div>);
};



export default ChatForm;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}
