import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import BillingInfo from "./BillingInfo";
import Final from "./Final";
import '../assets/css/style.css'
function Parent(props) {
    const giftDetails = {
        email:'',
        customerName:'',
        giftTotal:'',
        message:'',
    };
    const billingInfo = {
        yourName:'User1',
        yourEmail:'User1@email.com',
        cardNumber:'',
        cardCVC:'',
        cardExpireDate:''
    };
    const finalData = {
        sendTo:giftDetails.email,
        message:giftDetails.message,
        amount:giftDetails.giftTotal,
        giftCode:'this will be generated by backend'
    }
    const handleSaveGiftDetails = (data) =>{

        Object.assign(giftDetails, {
            email: data.email,
            customerName: data.customerName,
            giftTotal: data.giftTotal,
            message: data.message,
        });


        // giftDetails.email = data.email;
        // giftDetails.customerName = data.customerName;
        // giftDetails.giftTotal = data.giftTotal;
        // giftDetails.message = data.message;
    }
    const handleSaveBillingInfo = (data) =>{
        billingInfo.yourName = data.yourName;
        billingInfo.yourEmail = data.yourEmail;
        billingInfo.cardNumber = data.cardNumber;
        billingInfo.cardCVC = data.cardCVC;
        billingInfo.cardExpireDate = data.cardExpireDate;
    }
    const handleSubmitData=()=>{
        console.log("you submitted these data");
        console.log("first data",giftDetails);
        console.log("second data",billingInfo);
    }
    return (
        <Router>
            <Switch>
                <Route exact path={props.match.path}>
                    <Home data = {giftDetails} onHandleSaveData = {handleSaveGiftDetails} />
                </Route>
                <Route exact path={`${props.match.path}/billingInfo`} >
                    <BillingInfo detailData = {giftDetails} data = {billingInfo} onHandleSaveData={handleSaveBillingInfo}/>
                </Route>
                <Route exact path={`${props.match.path}/final`}>
                    <Final finalData={giftDetails} onHandleSubmitData = {handleSubmitData}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Parent;
