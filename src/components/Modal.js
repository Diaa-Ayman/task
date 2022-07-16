import { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import {
  BackdropContainer,
  ModalContainer,
  ModalContent,
} from './styles/Modal.style'

class Backdrop extends Component {
  render() {
    return <BackdropContainer backgroundColor = {this.props.backgroundColor} onClick={this.props.onClick} />;
  }
}

class ModalOverlay extends Component {
  render() {
    return (
      <ModalContainer boxShadow = {this.props.boxShadow} padding={this.props.padding} width={this.props.width} top={this.props.top} left={this.props.left}>
        <ModalContent>{this.props.children} </ModalContent>
      </ModalContainer>
    );
  }
}

const portalElement = document.getElementById('overlays');

class Modal extends Component {
 
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={this.props.onClick} backgroundColor = {this.props.backgroundColor} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay boxShadow = {this.props.boxShadow} padding={this.props.padding} width={this.props.width} left={this.props.left} top={this.props.top}>{this.props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
  }
}

export default Modal;
