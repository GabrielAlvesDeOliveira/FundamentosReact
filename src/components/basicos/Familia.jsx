import React from "react";
const Familia = (props)=>{

    return(
        <div>
            {
                props.children.map((el, i) =>{
                    return React.cloneElement(el, {...props, key: i})
                })
            }
        </div>
    )

}

export default Familia