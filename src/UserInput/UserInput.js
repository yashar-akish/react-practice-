import React from 'react';

const userInput = (props) => {
  return (
    <input type="text" onChange={props.changeUsername} value={props.userName} />
  )
};

export default userInput;