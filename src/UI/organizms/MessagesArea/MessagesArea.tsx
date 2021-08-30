import React from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import MessageBox from "../../atoms/MessageBox";
import CurrentUserMessageBox from "../../molecules/CurrentUserMessageBox";

const useStyles = makeStyles(styles);

const MessagesArea = (props: MessagesAreaProps) => {

    const classes = useStyles();

    const {myUserName} = props;
    const messages  = [{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },{
        userName: "John Doe",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },
        {
        userName: "Tomas",
        text: "Hi Supp dasiodhnioas dniasoio  asiodnasioni asdpdnasiod   doasndioas ?",
        timestamp: '',
    },]

    return (<div className={classes.root}>
        {messages.map((message) => {
            if(message.userName === myUserName)
            {
                return <div className={classes.myMessageWrapper}>
                    <CurrentUserMessageBox
                        {...message}
                    />
                </div>
            }

            return <div className={classes.messageWrapper}>
                <MessageBox
                    {...message}
                />
            </div>
        })}
    </div>);
};



export default MessagesArea;

export interface MessagesAreaProps{
    myUserName: string;
}
