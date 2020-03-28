import React from 'react';

const userInput = (props) => {
    const style ={
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px'   ,
      };

    return (
        <input style={style} type="text" onChange={props.userNameChange} value={props.userName}></input>
    );
}

export default userInput