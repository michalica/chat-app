import React, {useEffect, useRef} from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import MessageBox from "../../atoms/MessageBox";
import CurrentUserMessageBox from "../../molecules/CurrentUserMessageBox";
import {MessageStructure} from "../../../models/Message/Message";

const useStyles = makeStyles(styles);

const MessagesArea = (props: MessagesAreaProps) => {
    const lastDiv = useRef<HTMLDivElement>(null);

    const classes = useStyles();

    const {
        myUserName,
        messages,
    } = props;

    useEffect(() => {
        const scrollToLasElement = (): void =>
        {
            if(lastDiv.current)
            {
                lastDiv.current.scrollIntoView();
            }
        }
       scrollToLasElement();
    }, [messages])

    return (<div className={classes.root}>
        {messages.map((message: MessageStructure, index: number) => {
            if(message.author === myUserName)
            {
                return <div key={index} className={classes.myMessageWrapper}>
                    <CurrentUserMessageBox
                        messageDetails={message}
                    />
                </div>
            }

            return <div key={index} className={classes.messageWrapper}>
                <MessageBox
                    messageDetails={message}
                />
            </div>
        })}
        <div style={{ float:"left", clear: "both" }}
             ref={lastDiv}>
        </div>
    </div>);
};


export default MessagesArea;

export interface MessagesAreaProps{
    myUserName: string;
    messages: MessageStructure[];
}
