import React from "react";

const Modal = ({ string, closeFn }) => (
  <div className="modal">
    Add this theme to your user preferences' Custom CSS field:
    <pre>{string}</pre>
  </div>
);
