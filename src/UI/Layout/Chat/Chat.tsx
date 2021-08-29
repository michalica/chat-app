import React, {ReactNode} from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Chat = (props: ChatProps) => {

    const {
        messageArea,
        userArea,
    } = props;

    const classes = useStyles();
    return (
        <div>
            <div
                className={classes.messageArea}
            >
                {messageArea}
            </div>
            <div
                className={classes.userArea}
            >
                {userArea}
            </div>
        </div>
    );
};

export interface ChatProps
{
    messageArea: ReactNode;
    userArea: ReactNode;
}

export default Chat;
