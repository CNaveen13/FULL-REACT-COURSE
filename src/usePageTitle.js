import React, {useEffect} from "react";

function usePageTitle(count) {   // this is the custom hook and we need to add "use" before it 
    useEffect(() => {
      document.title=`count - ${count}`;
    },[count]);  
}

export default usePageTitle;
