import React from 'react';
import MessageBox from "../../atoms/MessageBox";
import {MessageBoxProps} from "../../atoms/MessageBox/MessageBox";

const CurrentUserMessageBox = (props: CurrentUserMessageBoxProps) => {
    return (
        <MessageBox
            {...props}
            backgroundColor="#FCF6C5"
        />
    )
};



export default CurrentUserMessageBox;

export interface CurrentUserMessageBoxProps extends Omit<MessageBoxProps, 'backgroundColor'>
{}
