import React, { useContext, useEffect, useRef } from "react";

import SimpleContext from "../../context/SimpleContext";

const NewPerson = () => {

  const context = useContext(SimpleContext);
  const inputFocus = useRef(null)
  const { person } = context.state;

  console.log("NewPerson.js");
  // useEffect(() => {
  //   console.log("new person.jsx useEffect()");
  //   setTimeout(() => {
  //     alert("data risieved");
  //   }, 1000);
  // },[person])
  useEffect(()=>{
    inputFocus.current.focus()
  })
  return (
    // <SimpleContext.Consumer>
    //   {(context) => (
    <form
      className="form-inline justify-content-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="input-group w-25">
        <input
        ref={inputFocus}
          type="text"
          placeholder="اسم بهم بده"
          className="form-control"
          onChange={context.setPerson}
          value={person}
        />
        <div className="input-group-prepend">
          <button
            className="btn btn-success fa fa-plus-square"
            onClick={context.handelNewPerson}
          />
        </div>
      </div>
    </form>
    //   )}
    // </SimpleContext.Consumer>
  );
};

export default NewPerson;
