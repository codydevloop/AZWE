import React from "react";
import { MDBJumbotron, MDBContainer, MDBIcon } from "mdbreact";
import "../JumboTron/JumboTron.css";

const JumboTron = () => {
    const navColor = { backgroundColor: '#150082' }
    return (
        <MDBJumbotron className="d-flex justify-content-center" fluid style={navColor}>
            <div>
            <MDBContainer className="brandContainer ">
                <div>
                    <MDBIcon className="sytleSoftballIcon" icon="baseball-ball" size="5x" />
                </div>
                <div className="whiteFont">
                    <div className="azwe">AZWE</div>
                    <div className="softball">SOFTBALL</div>
                    <div className="winningEdge">WINNING EDGE</div>
                </div>
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </MDBContainer>
            </div>
        </MDBJumbotron>
    )
}

export default JumboTron;