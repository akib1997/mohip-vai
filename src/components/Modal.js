import React from "react";

export default function Modal({ modal, chabi, mainData }) {
  console.log(chabi);
  return (
    <>
      <div className={`modal modal-${modal}`}>
        <div className="modal-content">
          <p>Select Amount To Donate (USD)</p>
          <form className="flex">
            <div className="radio-btn">
              <input type="radio" name="amount" id="1" />
              <label htmlFor="1">1</label>
            </div>
            <div className="radio-btn">
              <input type="radio" name="amount" id="2" />
              <label htmlFor="2">2</label>
            </div>
            <div className="radio-btn">
              <input type="radio" name="amount" id="3" />
              <label htmlFor="3">3</label>
            </div>
          </form>
          <button className="card-button">Pay</button>
        </div>
      </div>
    </>
  );
}
