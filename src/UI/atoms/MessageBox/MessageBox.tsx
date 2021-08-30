import React from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import {MessageStructure} from "../../../models/Message/Message";
import { format, fromUnixTime } from 'date-fns'

const useStyles = makeStyles(styles);

const MessageBox = (props: MessageBoxProps) => {

    const classes = useStyles(props);

    const {
        messageDetails: {
            message,
            timestamp,
            author,
        }
    } = props;
    return (
        <span className={classes.root}>
            <div
                className={classes.name}
            >
                {author}
            </div>
            <div className={classes.message}>
                {message}
            </div>
            <div
                className={classes.time}
            >
                {format(fromUnixTime(timestamp), 'dd MMMM y hh:mm')}
            </div>
        </span>
    );
};



export default MessageBox;

export interface MessageBoxProps {
    messageDetails: MessageStructure;
    backgroundColor?: string;
}
