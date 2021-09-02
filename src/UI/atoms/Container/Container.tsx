import React, { ReactNode } from "react";
import { makeStyles } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Container = (props: ContainerProps) => {
  const classes = useStyles();

  const { children } = props;
  return <div className={classes.root}>{children}</div>;
};

export default Container;

export interface ContainerProps {
  children: ReactNode;
}
