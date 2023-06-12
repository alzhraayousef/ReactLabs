import React from "react";

class Portfolio extends React.Component {
    constructor(props) {
        super();
        this.progressArray = [
            { ProgText: 'CSS', ProgColor: 'progress-bar bg-secondary', ProgWidth: '25%' },
            { ProgText: 'CSS', ProgColor: 'progress-bar bg-secondary', ProgWidth: '25%' }
        ];
    }
    render() {
        return (
            <>
               
               

                    <div className="col-4 " >
                        <div className="card shadow p-3 mb-5 rounded m-2" style={{ backgroundColor:`${this.props.cardColor}` , height: '150px' }}>
                            <div className="card-body">
                               {this.props.cardText}
                            </div>
                        </div>
                    </div>

            </>
        )
    }
}

export default Portfolio;