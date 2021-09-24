import React from "react";

export class FeedbackForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displaySurvey: this.props.displaySurvey
        }        
    }

    async componentDidMount() {
        if (window.addEventListener) {
            window.addEventListener("message", this.handleMessage.bind(this));
        } else {
            window.attachEvent("onmessage", this.handleMessage.bind(this));
        }

        if (document.addEventListener) {
            document.addEventListener("message", this.handleMessage.bind(this));
        } 
    }

    handleMessage = (event) => {
        let iframe = document.getElementById("mainframe");

        if (event !== undefined) {
            if (event.origin !== "https://nimmipatel.github.io/TestReview") //"http://localhost:55496")
            {
                console.log("The message came from some site we don't know. We're not processing it.");
                return;
            }


            var dataFromChildIframe = event.data;

            if (iframe !== null) {
                iframe.style.height = '20pt';
                iframe.style.width = '280pt';
            }
        }
    };

    handleClick = () => {
        setInterval(() => {
            var elem = document.activeElement;
            if (elem && elem.tagName === 'IFRAME') {
                alert('Clicked');
                clearInterval(this.handleClick());
            }
        }, 100);
    };

    AdjustIFrame() {
        let frame = document.getElementById("mainframe");
        if (frame !== null) {
            let maxW = frame.scrollWidth;
            let minW = maxW;
            let FrameH = 50; //IFrame starting height
            frame.style.height = FrameH + "px"

            while (minW === maxW) {
                FrameH = FrameH + 100; //Increment
                frame.style.height = FrameH + "px";
                minW = frame.scrollWidth;
            }
        }
    };

    ResizeToContent = () => {
        setInterval(() => {
            //var my_frame = document.activeElement;
            var my_frame = document.getElementById("mainframe");
            if (my_frame && my_frame.tagName === 'IFRAME') {
                //var my_frame = document.getElementById("mainframe");
                if (my_frame !== null) {
                    var content_width = my_frame.contentWindow.document.documentElement.scrollWidth;
                    var content_height = my_frame.contentWindow.document.documentElement.scrollHeight;

                    my_frame.style.width = content_width + 'px';
                    my_frame.style.height = content_height + 'px';
                }
                clearInterval(this.handleClick());
            }
        }, 100);
    };

    ResizeToContent1() {
        var my_frame = document.getElementById("mainframe");
        if (my_frame !== null) {
            var content_width = my_frame.contentWindow.document.documentElement.scrollWidth;
            var content_height = my_frame.contentWindow.document.documentElement.scrollHeight;

            my_frame.style.width = content_width + 'px';
            my_frame.style.height = content_height + 'px';
        }
    }

    unloadHandler() {
        // Timeout needed because the URL changes immediately after
        // the `unload` event is dispatched.
        setTimeout(this.dispatchChange(), 0);
    };

    hideSurvey() {
        let iframe = document.getElementById("mainframe");
        if (iframe !== null) {

            if (iframe.innerHTML === "") {
                this.setState({
                    displaySurvey: false
                });
            }

                //iframe.addEventListener("onLoad", this.unloadHandler());

                // Just in case the change wasn't dispatched during the unload event...
                //this.dispatchChange();
        }
    }    


    render() {
        const style = {
            height: '360pt',
            width: '280pt',
            borderWidth: '0px',
            display:'inline'
        }
        //let surveyUrl = "https://www.surveymonkey.com/r/WSDHJRP?cust_id=" + this.props.customerId + "&cont_id=" + this.props.contactId + "&asst_id=" + this.props.assessmentId + "&date=" + this.props.date + "&recordform_id=" + this.props.recordformId + " &activitytype=" + this.props.activitytype ;
        let surveyUrl = "https://nimmipatel.github.io/TestReview/SurveyComplete.html"; //"http://localhost:55496/SurveyComplete.html";
        return (
            <div>
                {this.state.displaySurvey ? (
                    <iframe id="mainframe" style={style} src={surveyUrl}></iframe>
                ) : <div id="tf_commit_detail"><>The record form has been committed : {this.props.customerId}</></div>}
                
            </div> 
        );
    }
}

export default FeedbackForm;