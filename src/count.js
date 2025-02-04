import React from 'react';
const Count = ({text,number}) => {
    return (
           <h3>
             {text} : {number}
           </h3>
    );
};
export default React.memo(Count);