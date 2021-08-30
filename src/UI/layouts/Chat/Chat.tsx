import React, {ReactNode} from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import Container from '../../atoms/Container';

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
                <Container>
                    {messageArea}
                </Container>
            </div>
            <div
                className={classes.userArea}
            >
                <Container>
                    {userArea}
                </Container>
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


