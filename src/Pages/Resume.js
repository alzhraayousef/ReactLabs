import React from "react";
import Hero from "../Components/Hero";
import Aboutme from "../Components/Aboutme";
import Skill from "../Components/Skill";
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";


class Resume extends React.Component {

    render() {
        return (
            <>
                <Hero />
                <Aboutme />
                <Skill />

                <div className="text-left mt-5">
                    <h1>Portfolio</h1>
                </div>
                <div className="row mt-5 p-5">
                    <Portfolio cardText="UI/UX" cardColor="white" />
                    <Portfolio cardText="Web Design" cardColor="#CF9BC3" />
                    <Portfolio cardText="Web Development" cardColor="#white" />
                    <Portfolio cardText="Mobile Design" cardColor="#CF9BC3" />
                    <Portfolio cardText="UI/UX Design" cardColor="#white" />
                    <Portfolio cardText="Testing" cardColor="#CF9BC3" />

                </div>

<Footer/>
            </>
        )
    }
}

export default Resume;



/* <img src="./images/flower.jpg" alt="flower" style={{width:'100%',height:'450px'}} /> */
