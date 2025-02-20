import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./Envelope.css";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const openEnvelope = () => {
    setIsOpen(true);
    triggerConfetti(); // Trigger confetti when envelope opens

    setInterval(() => {
      setFadeOut(true);
    }, 3000);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 900,
      spread: 90,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="envlope-wrapper">
      <div id="envelope" className={isOpen ? "open" : "close"}>
        <div
          id="test"
          className={`front flap ${fadeOut ? "fadeOut" : ""}`}
        ></div>
        <div className={`front pocket ${fadeOut ? "fadeOut" : ""}`}></div>
        <div className="letter">
          <div className="words line1"></div>
          <div className="words line2">Lorem ipsum dolor sit!</div>
          <div className="words line3">Lorem, ipsum dolor.</div>
          <div className="words line4">Lorem, ipsum.</div>
        </div>
      </div>
      <div className={`reset ${fadeOut ? "hidden" : ""}`}>
        <button className="btn" onClick={openEnvelope}>
          Открыть
        </button>
      </div>
    </div>
  );
};
export default Envelope;
