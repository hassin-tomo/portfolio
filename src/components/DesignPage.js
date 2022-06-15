import React from "react";
import Design01 from "../Images/oseibo_title_top.jpg";
import Design02 from "../Images/outlet_sale22.jpg";
import Design03 from "../Images/mail_yakiniku6.jpg";
import Design04 from "../Images/mail_yakiniku4.jpg";
import Design05 from "../Images/yakiniku-banner08.jpg";
import Design06 from "../Images/LINE8.jpg";
import Design07 from "../Images/yw_matsu_sm.jpg";
import Design08 from "../Images/yw_take_sm.jpg";
import Design09 from "../Images/yw_ume_sm.jpg";
import Design10 from "../Images/mo_souzaiset_sm.jpg";

const BlogPage = () => {
  return (
    <div className="container">
      <h1>Design</h1>
        <img src={Design01} className="Design01 Images" />
        <img src={Design02} className="Design02 Images" />
        <img src={Design03} className="Design03 Images" />
        <img src={Design04} className="Design04 Images" />
        <img src={Design05} className="Design05 Images" />
        <img src={Design06} className="Design06 Images" />
        <img src={Design07} className="Design07 Images" />
        <img src={Design08} className="Design08 Images" />
        <img src={Design09} className="Design09 Images" />
        <img src={Design10} className="Design10 Images ImageBottom" />
    </div>
  )
};
export default BlogPage;
