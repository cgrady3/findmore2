import React, { Component } from "react";
import { Container, Row, Col } from "../Grid";
import { Dropdown } from "../Dropdown";
import { SmTextbox, LgTextbox } from "../Textbox";
import { Button } from "../Button";
import API from "../../utils/API";

class Modal extends Component() {
  state = {
    description: "",
    type: "",
    title1: "",
    title2: "",
    title3: "",
    title4: "",
    title5: "",
    title6: "",
    title7: "",
    userId: this.props.userId,
  };

  closeModal = (event) => {
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (
      this.state.description &&
      this.state.title1 &&
      this.state.title2 &&
      this.state.title3
    ) {
      return 
      this.state.type == "Books" ? 
      API.createBooksCollection({
        description: this.state.description,
        title1: this.state.title1,
        title2: this.state.title2,
        title3: this.state.title3,
        title4: this.state.title4,
        title5: this.state.title5,
        title6: this.state.title6,
        title7: this.state.title7,
        userId: this.state.userId,
      }) 
      : this.state.type == "Shows" ? 
      API.createShowsCollection({
        description: this.state.description,
        title1: this.state.title1,
        title2: this.state.title2,
        title3: this.state.title3,
        title4: this.state.title4,
        title5: this.state.title5,
        title6: this.state.title6,
        title7: this.state.title7,
        userId: this.state.userId,
      }) 
      : this.state.type == "Movies" ? 
      API.createMoviesCollection({
        description: this.state.description,
        title1: this.state.title1,
        title2: this.state.title2,
        title3: this.state.title3,
        title4: this.state.title4,
        title5: this.state.title5,
        title6: this.state.title6,
        title7: this.state.title7,
        userId: this.state.userId,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    } else {
      alert("A collection must have a description and 3 titles");
    }
  };

  onHide = () => {
    setModalShow(false);
  };

  return (){
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Currate a Collection
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Col>
            <h4>What kind of collection are you making?</h4>
            <Dropdown
              value={this.state.type}
              onChange={this.handleInputChange}
              name="type"
            />
            <Lgtextbox
              label="Describe what your collection is about"
              placeholder="What's the vibe?"
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
            />
            <h4>Enter your titles below</h4>
            <h4>Each collection requires at least 3 titles</h4>
            <SmTextbox
              value={this.state.title1}
              onChange={this.handleInputChange}
              name="title1"
            />
            <SmTextbox
              value={this.state.title2}
              onChange={this.handleInputChange}
              name="title2"
            />
            <SmTextbox
              value={this.state.title3}
              onChange={this.handleInputChange}
              name="title3"
            />
            <SmTextbox
              value={this.state.title4}
              onChange={this.handleInputChange}
              name="title4"
            />
            <SmTextbox
              value={this.state.title5}
              onChange={this.handleInputChange}
              name="title5"
            />
            <SmTextbox
              value={this.state.title6}
              onChange={this.handleInputChange}
              name="title6"
            />
            <SmTextbox
              value={this.state.title7}
              onChange={this.handleInputChange}
              name="title7"
            />
          </Col>
          <Button
            btnType="primary"
            label="Submit"
            onClick={this.handleSubmit}
          />
          <Button btnType="danger" label="Cancel" onClick={this.closeModal} />
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  };
}

export default Modal;