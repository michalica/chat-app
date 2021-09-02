import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Button = (props: ButtonProps) => {
  const classes = useStyles();
  const { children } = props;

  return (
    <button {...props} className={classes.root} type="button">
      {children}
    </button>
  );
};

export default Button;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
