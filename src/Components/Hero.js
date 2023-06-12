import React from "react";
import "./HeroStyle.css";
import ButtonClass from "./ButtonClass";
class Hero extends React.Component
{

    render() {
        return (
            <>
                <div style={{
                    color: 'black', backgroundImage: "url('../images/flower.jpg')",
                    height: '450px', backgroundSize: 'cover'
                }}>
                    <span id="textSpan">
                        <h1>Alzhraa Yousef</h1>
                        <h2>&nbsp;&nbsp;Web developer</h2>
                        <div style={{ marginLeft: '75px', marginTop: '10px' }}>
                            <ButtonClass btnClass="btn btn-dark" btnText="Contact Me" />
                        </div>
                    </span>
                </div>
            </>
        )
    }
}

export default Hero;