import React from "react";
import "./About.css";

function AboutValhalla({ about }) {
  console.log(about);
  return (
    <>
      <img style={{ width: "40%" }} src="/Images/valhallalogo8.png" />
      <div className="AboutContainer">
        <h1>About Valhalla Coffee Company</h1>
        <p className="AboutText">
          Coffee, with a cause…Valhalla Coffee Company is a veteran-owned organic coffee
          company that not only serves some of the best coffee in world but does
          it with a purpose. Our passion behind our coffee is driven by our
          commitment to help fellow veterans and front-line healthcare workers
          affected by the COVID pandemic. With every purchase that you make we
          contribute to the mission of serving those that selflessly serve
          others. All our coffee comes from Brazil and Columbia, and always
          roasted fresh. When you join our coffee club, you get your coffee when
          and how you want it and you’re supporting a great cause. As a member
          you will save money with our coffee club, receive Club Member only
          offers, and help those in need. Until Valhalla!
        </p>
      </div>
    </>
  );
}

export default AboutValhalla;
