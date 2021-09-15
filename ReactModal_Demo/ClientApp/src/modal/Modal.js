import React from "react";
import Modal from "react-modal";
import FeedbackForm from "../Survey/FeedbackForm";
import "C:/Users/patelN/RSInsightsDocs/ReactModal_Demo/ReactModal_Demo/ClientApp/src/Styles/TestFeedback.scss"
import 'C:/Users/patelN/RSInsightsDocs/ReactModal_Demo/ReactModal_Demo/ClientApp/src/Styles/Login.scss';
import 'C:/Users/patelN/RSInsightsDocs/ReactModal_Demo/ReactModal_Demo/ClientApp/src/Styles/Clinical.scss';

Modal.setAppElement("#root");

export class ModalOverlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>
            <Modal isOpen={this.props.show} contentLabel="test-modal" className="success-modal-450px"
                overlayClassName="Overlay"
                aria-modal="true">

            <div
                className="font-rsi-h3 bold" aria-label="Heading"
                style={{ "marginTop": "32px", "marginBottom": "20px" }}
            >
                <h1 id="tf_commit_hdr">Commit Successful</h1> 
            </div>
            <div id="tf_commit_detail">
                    <>The record form has been committed : {this.props.customerId}</>
            </div>
                <FeedbackForm
                    close={this.props.exit}
                    customerId={this.props.customerId}
                    contactId={this.props.contactId}
                    assessmentId={this.props.assessmentId}
                    date={this.props.date}
                    recordformId={this.props.recordformId}
                    activitytype={this.props.activitytype}
                    displaySurvey={true}
            />
            <div className="centered-buttons">
                <input
                    type="button"
                    className="blue-button"
                    style={{ width: "144px", height: "55px" }}
                    onClick={this.props.exit}
                    value="Continue"
                />

            </div>
        </Modal>
        </div>
    );
    }
}

export default ModalOverlay;