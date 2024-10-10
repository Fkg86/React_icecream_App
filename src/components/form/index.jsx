import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isHover, setIsHover] = useState(false);
  return (
    <form className="d-flex justify-content-center align-items-center gap-3">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        type="checkbox"
        className="form-check-input mb-1"
        name="checkBox"
        id="terms"
      />
      <div className="wrapper">
        <p style={{ opacity: isHover ? 1 : 0 }}>
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları Okudum ve Kabul Ediyorum</label>
      </div>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
