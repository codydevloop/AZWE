import React from "react";
import { MDBJumbotron, MDBContainer, MDBIcon } from "mdbreact";
import "../JumboTron/JumboTron.css";

const JumbotronPage = () => {
    const navColor = { backgroundColor: '#150082' }
    return (
        <MDBJumbotron fluid style={navColor}>
            <MDBContainer className="brand">
                <div>
                    <MDBIcon className="sytleSoftball" icon="baseball-ball" size="4x" />
                </div>
                <div className="whiteFont">
                    <div>AZWE</div>
                    <div className="softball">SOFTBALL</div>
                    <div className="winningEdge">WINNING EDGE</div>
                </div>
                {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
            </MDBContainer>
        </MDBJumbotron>
    )
}

export default JumbotronPage;