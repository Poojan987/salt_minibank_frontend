import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "600px",
    borderRadius: "24px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
};

function CenterModalLayout(props) {
  return (
    <>
      <div className="">
        <Modal
          isOpen={props.modalstate}
          style={customStyles}
          className="outline-0 bg-white"
          onRequestClose={() => {
            props.setModalstate(false);
          }}
          setAppElement={"div"}
        >
          {props.children}
        </Modal>
      </div>
    </>
  );
}

export default CenterModalLayout;
