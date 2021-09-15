import React from "react";

export class EmbedSurvey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //displaySurvey: this.props.displaySurvey
        }

    render() {
        const style = {
            height: '100%',
            width: '100%',
            borderWidth: '0px',
            display: 'inline'
        }
        //let surveyUrl = "https://www.surveymonkey.com/r/WSDHJRP?cust_id=" + this.props.customerId + "&cont_id=" + this.props.contactId + "&asst_id=" + this.props.assessmentId + "&date=" + this.props.date + "&recordform_id=" + this.props.recordformId + "&activitytype=" + this.props.activitytype;
        let surveyUrl = "https://www.surveymonkey.com/r/WSDHJRP?cust_id=504322&cont_id=810&asst_id=6783&date=02-July-2021&recordform_id=1&activitytype=Testing";
        
        return (
            <div>
                <iframe id="mainframe" style={style} src={surveyUrl}></iframe>
            </div>
        );
    }
};
