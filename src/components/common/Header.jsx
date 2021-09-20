import React, { useContext,useEffect } from "react";

import SimpleContext from "../../context/SimpleContext";

const Header = () => {
  console.log('Header.js ');
  const context = useContext(SimpleContext);
  const { persons,appTitle } = context.state;

  useEffect(() => {
    console.log("Header.jsx useEffect()");
    // console.log('header.jsx update');
    const timer = setTimeout(() => {
   
    }, 1000);
    return()=>{
      console.log('Header.jsx unmount');
      clearTimeout(timer)
    }
  },[persons])

  let badgeStyle = [];
  if (persons.length >= 3) badgeStyle.push("badge-success");
  if (persons.length <= 2) badgeStyle.push("badge-warning");
  if (persons.length <= 1) badgeStyle.push("badge-danger");
  return (
    // <SimpleContext.Consumer>
    //   {context=>(
    <div>
      <div className="alert alert-info">
        <h2>{appTitle}</h2>
      </div>
      <h5 className="alert alert-light">
        تعداد اشخاص
        <span className={`badge badge-pill ${badgeStyle.join(" ")}`}>
          {persons.length}
        </span>{" "}
        نفر می باشد
      </h5>
    </div>

    // </SimpleContext.Consumer>
  );
};

export default Header;
