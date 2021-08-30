import React from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";


const useStyles = makeStyles(styles);

const MessageBox = (props: MessageBoxProps) => {

    const classes = useStyles(props);

    const {
        text,
        timestamp,
        userName,
    } = props;
    return (
        <span className={classes.root}>
            <div
                className={classes.name}
            >
                {userName}
            </div>
            <div className={classes.message}>
                {text}
            </div>
            <div
                className={classes.time}
            >
                {timestamp}
            </div>
        </span>
    );
};



export default MessageBox;

export interface MessageBoxProps {
    userName: string;
    text: string;
    timestamp: string;
    backgroundColor?: string;
}
