import React from "react";
import ModalOverlay from "../modal/Modal";

export class ModalContainer extends React.Component {
  constructor() {
    super();
    this.state = {
        showModal: false,
        customerId: '',
        contactId: '',
        assessmentId: '',
        date: '',
        recordformId: '',
        activitytype: ''
    }
}
  handleShowModal = exampledata => {
    this.setState(this.toggleShowModal);
    if (this.state.showModal === false) {
      this.setState({
          customerId: exampledata.customerId,
          contactId: exampledata.contactId,
          assessmentId: exampledata.assessmentId,
          date: exampledata.date,
          recordformId: exampledata.recordformId,
          activitytype: exampledata.activitytype
      });
    }
  };

  toggleShowModal = state => {
    return {
      showModal: !state.showModal
    };
  };

  render() {
      const examples = [{ 'customerId': '504321', 'contactId': '809', 'assessmentId': '6783', 'date': '28-July-2021', 'recordformId': '1', 'activitytype': 'rostering'},
          { 'customerId': '504322', 'contactId': '810', 'assessmentId': '6783', 'date': '28-July-2021', 'recordformId': '2', 'activitytype': 'rostering'}]

      let exampleClick = examples.map((example, i) => (
          <button key={i} onClick={() => this.handleShowModal(example)} className="portfolio-box">
              {example.customerId}
          </button>
    ));
    return (
        <div>
            <div>
                {exampleClick}
            </div>

        <ModalOverlay
            show={this.state.showModal}
            exit={this.handleShowModal}
            customerId={this.state.customerId}
            contactId={this.state.contactId}
            assessmentId={this.state.assessmentId}
            date={this.state.date}
            recordformId={this.state.recordformId}
            activitytype={this.state.activitytype}
        />
        </div>
    )
  }
}
export default ModalContainer;