import clsx from "clsx";
import { useContext } from "react";
import { Context } from "./Context.js";

export default function Button(props) {
  const theme = useContext(Context);
  const classes = clsx({
    dark: theme === "dark"
  });

  return <button className={classes}>{props.children}</button>;
}
