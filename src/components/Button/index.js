import React from "../../../node_modules/react";

export function LinkButton(props) {
  return (
    <li>
        <a href={props.href} method={props.method} className="nav-link">{props.label}</a>
    </li>
  );
}

export function Button(props) {
  return (
    <button type="button" className={"btn btn-" + props.btnType} >
        {props.label}
    </button>
  );
}
