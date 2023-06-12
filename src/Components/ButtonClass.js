import React from "react";

class ButtonClass extends React.Component
{
    constructor(props)
    {
        super();

    }

    render()
    {
        return(
            <button className={this.props.btnClass}>{this.props.btnText}</button>
        )
    }
}
export default ButtonClass;