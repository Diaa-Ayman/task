import { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { hideCartOverlay } from '../store/cart-slice';
import {
  BackdropContainer,
  ModalContainer,
  ModalContent,
} from './styles/Modal.style';

class Backdrop extends Component {
  render() {
    return <BackdropContainer onClick={this.props.onClick} />;
  }
}

class ModalOverlay extends Component {
  render() {
    return (
      <ModalContainer>
        <ModalContent>{this.props.children} </ModalContent>
      </ModalContainer>
    );
  }
}

const portalElement = document.getElementById('overlays');

class Modal extends Component {
  hideOverlayHandler() {
    this.props.hideOverlay();
  }
  render() {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={this.hideOverlayHandler.bind(this)} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{this.props.children}</ModalOverlay>,
          portalElement
        )}
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideOverlay: () => dispatch(hideCartOverlay()),
  };
};
export default connect(null, mapDispatchToProps)(Modal);
