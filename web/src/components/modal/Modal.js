import React from "react";
import { Modal as AntdModal } from "antd";
import "./Modal.scss";

const Modal = ({ children, title, open, onOk, onCancel }) => {
  return (
    <AntdModal title={title} open={open} onOk={onOk} onCancel={onCancel}>
      {children}
    </AntdModal>
  );
};

export default Modal;
