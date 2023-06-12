import React from "react";
import Progress from "./Progress"
import "./SkillStyle.css"

class Skill extends React.Component {
constructor()
{
    super();
    this.progressArray=[
        {ProgText:'CSS',ProgColor:'progress-bar bg-secondary',ProgWidth:'25%'},
        {ProgText:'CSS',ProgColor:'progress-bar bg-secondary',ProgWidth:'25%'},
        {ProgText:'CSS',ProgColor:'progress-bar bg-secondary',ProgWidth:'25%'},
        {ProgText:'CSS',ProgColor:'progress-bar bg-secondary',ProgWidth:'25%'}

    ];
}
    render() {
        return (
            <>
                <div className="pt-5 pb-5" style={{ backgroundColor: '#CF9BC3' }}>
                    <div className="container text-center">
                        <h1>Skills</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
                        </p>
                    </div>

                    <div className="row mt-5">
                        <div className="col-6">
                            <ul id="skillul"> 
                                <li>UI/UX Design</li>
                                <li>Responsive Design</li>
                                <li>Web Design</li>
                                <li>Mobile App Design</li>
                            </ul>
                        </div>

                        <div className="col-6">
                          
                            {
                              this.progressArray.forEach((element) => {
                            <Progress ProgText={element.ProgText} ProgColor={element.ProgColor}ProgWidth={element.ProgWidth}/>
                            })
                        }
                            <Progress ProgText="HTML" ProgColor="progress-bar bg-secondary" ProgWidth="75%"/>
                            <Progress ProgText="CSS" ProgColor="progress-bar bg-secondary" ProgWidth="55%"/>
                            <Progress ProgText="JS" ProgColor="progress-bar bg-secondary" ProgWidth="40%"/>
                            <Progress ProgText="Angular" ProgColor="progress-bar bg-secondary" ProgWidth="30%"/>
                            <Progress ProgText=".Net" ProgColor="progress-bar bg-secondary" ProgWidth="100%"/>
                            <Progress ProgText="Blazor" ProgColor="progress-bar bg-secondary" ProgWidth="70%"/>
                            <Progress ProgText="Node js" ProgColor="progress-bar bg-secondary" ProgWidth="60%"/>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Skill;