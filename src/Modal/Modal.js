import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  state = {};
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal} onClick={this.handleBackdrop}>
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
