import React from "../../../node_modules/react";
import { Container, Row, Col } from "../Grid";
import { LinkButton, Button } from "../Button";

export function List({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function CollectionListItem(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <h3>{props.description}</h3>
        </Row>
        <Row>
          <Col size="sm-10">
            <p>{props.title}</p>
          </Col>
          <Col size="sm-2">
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row className="quality">
              <p>{props.quality}</p>
            </Row>
          </Col>
        </Row>
        <Row>
          <LinkButton lable="Comments"/>
          <LinkButton label="Upvote"/>
          <LinkButton label="Downvote"/>
        </Row>
      </Container>
    </li>
  );
}

