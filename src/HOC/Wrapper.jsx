import React from 'react'
const Wrapper = ({children,classes}) => {
    return ( <div className={classes}>
        {children}
    </div>);
}
 
export default Wrapper;