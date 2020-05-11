import React from "../../../node_modules/react";
import { Container } from "../Grid";

export function CommentItem({ comment }) {
    return (
        <li className="list-group-item">
            <Container>
                <p>{comment}</p>
            </Container>
        </li>
    );
}