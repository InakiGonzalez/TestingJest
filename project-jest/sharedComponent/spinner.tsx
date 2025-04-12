import * as React from "react";

function Spinner() {
  return (
    <div className="lds-ripple" aria-label="loading...">
      <div />
      <div />
    </div>
  );
}

export default Spinner;
