import React from "react";
import ticket1 from "../../Assests/ticketConfirm.png";
import payment from "../../Assests/onlinePay.png";
import classes from "./Service.module.css";

const Service = () => {
  const serviceIcon = [
    {
      imgUrl: `${ticket1}`,
      imgType: "FINGPOT Shopkeeper Bank",
    },
    {
      imgUrl: `${ticket1}`,
      imgType: "ICICI Bank Shopkeeper Bank",
    },
    {
      imgUrl: `${ticket1}`,
      imgType: "Domastic Money Transfer",
    },
    {
      imgUrl: `${ticket1}`,
      imgType: "Aadhar Enabled payment system",
    },
    {
      imgUrl: `${ticket1}`,
      imgType: "Credit card",
    },
  ];
  const serviceTicket = [
    {
      imgS: `${payment}`,
      imgText: "Air Ticketing",
    },
    {
      imgS: `${payment}`,
      imgText: "Railway Ticketing",
    },
    {
      imgS: `${payment}`,
      imgText: "DTH Recharge",
    },
    {
      imgS: `${payment}`,
      imgText: "Mobile Recharge",
    },
    {
      imgS: `${payment}`,
      imgText: "Hotel Booking",
    },
    {
      imgS: `${payment}`,
      imgText: "Air Ticketing",
    },
  ];
  return (
    <div className={classes.serviceSe}>
      <div>
        <h3>Services</h3>
        <div className={classes.serviceIconDiv}>
          {serviceIcon.map((item) => {
            return (
              <div className={classes.icons}>
                <img src={item.imgUrl} alt="" />
                <span>{item.imgType}</span>
              </div>
            );
          })}
        </div>
        <div className={classes.serviceTicketDiv}>
          {serviceTicket.map((post) => {
            return (
              <div className={classes.icons}>
                <img src={post.imgS} alt="" />
                <span>{post.imgText}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.footerDiv}>
        <div className={classes.footerIcons}>
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Refund And Cancelation</span>
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Service;
