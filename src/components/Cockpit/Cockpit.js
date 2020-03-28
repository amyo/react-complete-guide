import React from 'react';

const cockpit = (props) => {
    const style = {
        backgroundColor: 'white',
        border: '1px solid blue',
        padding: '8px'
    };

    return (
        <div>
            <h1>Hi, I'm a react app</h1>
            <h2>This is working!</h2>
            <button style={style} onClick={props.click}>Switch Name</button>
        </div>
    );
}

export default cockpit