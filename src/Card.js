import clsx from "clsx";
import { useContext } from "react";
import { Context } from "./Context.js";

export default function Card(props) {
  const theme = useContext(Context);
  const classes = clsx({
    dark: theme === "dark"
  });

  return <div className={classes}>{props.children}</div>;
}
