import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {makeStyles} from "@material-ui/core";
import styles from "./styles";
import Input from "../../atoms/Input";
import Button from '../../atoms/Button';

const useStyles = makeStyles(styles);

const ChatForm = (props: ChatFormProps) => {

    const { onClick } = props;

    const [value, setValue] = useState<string>('');

    const classes = useStyles();

    function submitValueAndReset(): void
    {
        onClick(value);
        setValue('');
    }

    return (<div className={classes.root}>
        <div
        className={classes.inputWrapper}
    >
        <Input
            value={value}
            aria-label="message-input"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                    submitValueAndReset();
                }
            }}
        />
        </div>
        <div
            className={classes.buttonWrapper}
        >
            <Button
                aria-label="submit-message"
                onClick={() => {
                    submitValueAndReset();
            }}
            >Send</Button>
        </div>
    </div>);
};



export default ChatForm;

export interface ChatFormProps {
    onClick(value: string): void
}
