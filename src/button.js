import React from 'react';
const Button = ({children,clickHandler}) => { //children: In React, children refers to the content inside the opening and closing tags of a component. For example, in <Button>Click Me</Button>, "Click Me" would be passed to children
    console.log(`${children} rendered`);
    return <button onClick={clickHandler}>{children}</button>
};
export default React.memo(Button);