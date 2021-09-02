import React from "react";
import { InputHTMLAttributes } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Input = (props: InputProps) => {
  const classes = useStyles();
  return <input {...props} className={classes.root} />;
};

export default Input;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
