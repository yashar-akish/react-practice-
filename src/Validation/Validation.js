import React from 'react';

const validation = (props) => {

  let textInfo = 'Text Long Enough';

  if (props.inputLength <= 5) {
    textInfo = 'Text too short';
  }
  return (

    <div>
      <p>{props.inputLength}</p>
      <p>{textInfo}</p>
      {/* {props.inputLength < 5 && props.inputLength > 0 ? <p>Text too Short</p> : null}
      {props.inputLength > 8 ? <p>Text too Long</p> : null} */}
    </div>
  );
}

export default validation;