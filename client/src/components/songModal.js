import React, { ReactElement, useState } from "react";
import Modal from "react-modal";
import { AiFillCloseCircle } from "react-icons/ai";

export default function BadgeEarn({ showModal, setShowModal, Song }) {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      zIndex: 999,
    },
    content: {
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      padding: "0px",
      border: "0px",
      backgroundColor: "transparent",
      zIndex: 999,
    },
  };

  return (
    <div>
      {Song && (
        <Modal isOpen={showModal} style={customStyles} ariaHideApp={false}>
          <>
            <div className="flex-shrink justify-center  items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
              <div
                style={{ width: "643px" }}
                className="relative my-6  mx-auto"
              >
                {/* content */}
                <div
                  className="absolute z-50 top-6 right-6 cursor-pointer"
                  onClick={() => setShowModal(false)}
                >
                  <AiFillCloseCircle />
                </div>
                <div
                  className="border-2  rounded-lg shadow-lg relative flex flex-col items-center w-full bg-white outline-none focus:outline-none p-6"
                  style={{ maxHeight: "656px" }}
                >
                  sssssssssssssssssssssssssssssssssssssssssssssssssss
                </div>
              </div>
            </div>
          </>
        </Modal>
      )}
    </div>
  );
}
