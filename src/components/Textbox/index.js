import React from "../../../node_modules/react";

export function SmTextbox(props) {
    return (
        <div class="form-group">
            <label>{props.label}</label>
            <input class="form-control" type="text" placeholder={props.placeholder} />
        </div>
    );
}

export function LgTextbox(props) {
    return (
        <div class="form-group">
            <label>{props.label}</label>
            <textarea rows="4" cols="80" class="form-control" placeholder={"'"+ props.placeholder + "'"} />
        </div>
    );
}