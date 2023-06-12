import React from "react";

class Progress extends React.Component {
    constructor(props)
    {
        super();
    }
    render() {
        return (

            <>

                <div className="progress mb-3" role="progressbar" aria-label="Example with label" style={{width: '400px'}}>
                <div className="progress-bar bg-secondary" style={{width: '25%'}}>{this.props.ProgText}</div>
                    <div className={this.props.ProgColor} style={{width: `${this.props.ProgWidth}`}}></div>
                </div>
            </>

        )

    }
}

export default Progress;