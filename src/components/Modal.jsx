import React, { Fragment } from "react";

const Modal = ({ string, closeFn }) => (
  <Fragment>
    <div className="modal">
      Add this theme to your user preferences' Custom CSS field:
      <pre>{string}</pre>
      <button className="btn" onClick={() => closeFn()}>
        Close
      </button>
    </div>
    <div className="overlay" onClick={() => closeFn()} />
  </Fragment>
);

export default Modal;
