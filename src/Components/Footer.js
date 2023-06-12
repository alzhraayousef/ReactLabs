import React from "react";
import ButtonClass from "./ButtonClass";


class Footer extends React.Component {

    render() {
        return (
            <>
                <div className="pt-5 pb-5 row" style={{ backgroundColor: '#CF9BC3' }}>
               
                <div className="col-4 text-start p-5">
                    <h3>Get In Touch</h3>
                    <h5>alzhraayosef@gmail.com</h5>
                    <h5>0120548935</h5>
                </div>

                <div className="col-4">
                <div style={{ marginLeft: '30px', marginTop: '50px' }}>
                            <ButtonClass btnClass="btn btn-dark" btnText="Contact Me" />
                        </div>
                </div>

                <div className="col-4">
                    <div className="row p-5 ms-5">
                        <div className="col-2">
                        <i class="bi bi-linkedin" style={{fontSize:'40px'}}></i>
                        </div>
                        <div className="col-2">
                        <i class="bi bi-facebook" style={{fontSize:'40px'}}></i>
                        </div>
                        <div className="col-2">
                        <i class="bi bi-twitter" style={{fontSize:'40px'}}></i>
                        </div>
                    </div>
                

                </div>
                </div>
            </>
        )
    }
}

export default Footer;