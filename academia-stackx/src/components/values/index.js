import React from "react";
import "./index.css";

function Values(props) {
  return (
    <div>
      <h3 className='values'>{props.value}</h3>
    </div>
  );
}

export default Values;
