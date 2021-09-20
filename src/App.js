import React, { Component, createRef, Fragment } from "react";

import Persons from "./components/Person/Persons";
import NewPerson from "./components/Person/NewPerson";

import { ToastContainer, toast } from "react-toastify";
import Header from "./components/common/Header";

import SimpleContext from "./context/SimpleContext";
import Wrapper from "./HOC/Wrapper";

// import Radium from "radium";
class App extends Component {
  constructor() {
    super();
    console.log("App.js cunstructor");
    this.hoverButton = createRef()
  }

  state = {
    persons: [],
    person: "",
    showPersons: true,
    showHeader: true,
    appTitle: "مدیریت کننده اشخاص",
  };

  static getDerivedStateFromProps(props, state) {
    console.log("App.js getDerivedStateFromProps");
    return state;
  }
  componentDidMount() {
    console.log("App.js componentDidMount");
    this.hoverButton.current.click()
    this.inputBtn.click()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons.jsx getSnapshotBeforeUpdate");
    const snapshots = { prevProps, prevState };
    return snapshots;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("persons.jsx componentDidUpdate");
    console.log(snapshot);
   
  }
  static contextType = SimpleContext;
  // this.context
  handleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
    console.log(this.state.showPersons);
  };
  handelShowHeader = () => {
    this.setState({ showHeader: !this.state.showHeader });
  };
  handelDeletePerson = (id) => {
    const persons = [...this.state.persons];
    const filterPersons = persons.filter((item) => {
      return item.id !== id;
    });
    const personIndex = persons.findIndex((p) => p.id === id);
    const person = persons[personIndex];

    this.setState({
      persons: filterPersons,
    });
    toast.error(`${person.fullName} با موفقیت حذف شد .`, {
      position: "top-right",
      closeOnClick: true,
    });
  };
  handelNameChange = (event, id) => {
    const { persons: allPerson } = this.state;
    const personIndex = allPerson.findIndex((p) => p.id === id);
    const person = allPerson[personIndex];
    person.fullName = event.target.value;
    const persons = [...allPerson];
    persons[personIndex] = person;
    this.setState({ persons });
  };
  handelNewPerson = () => {
    const persons = [...this.state.persons];
    const person = {
      id: Math.floor(Math.random() * 1000),
      fullName: this.state.person,
    };
    if (person.fullName !== "" && person.fullName !== " ") {
      persons.push(person);
      this.setState({
        persons,
        person: "",
      });
      toast.success(`${person.fullName} با موفقیت اضافه شد `, {
        position: "bottom-right",
        closeButton: true,
        closeOnClick: true,
      });
    }
  };

  setPerson = (event) => {
    this.setState({ person: event.target.value });
  };

  render() {
    console.log("App.js render()");

    const { showPersons, showHeader } = this.state;

    return (
      <SimpleContext.Provider
        value={{
          state: this.state,
          handelDeletePerson: this.handelDeletePerson,
          handelNameChangr: this.handelNameChange,
          handelNewPerson: this.handelNewPerson,
          setPerson: this.setPerson,
        }}
      >
        {/* <Fragment> */}
        <Wrapper classes="rtl text-center">
        {/* <div className="rtl text-center"> */}
            {showHeader ? <Header /> : null}
            <button onClick={this.handelShowHeader} className="btn btn-info" ref={this.hoverButton}>
              نمایش هدر
            </button>
            <div className="m-2 p-2">
              <NewPerson />
            </div>
            <button
              onClick={this.handleShowPersons}
              className={showPersons ? "btn btn-info" : "btn btn-danger"}
              style={{ ":hover": { borderRadius: "12px" } }}
              ref={(el)=>{
                this.inputBtn = el
              }}
            >
              نمایش اشخاص
            </button>
            {showPersons ? (
              <Persons
              // persons={persons}
              // personDelete={this.handelDeletePerson}
              // changeInput={this.handelNameChange}
              />
            ) : null}
            <ToastContainer />
          {/* </div> */}
        </Wrapper>
          
        {/* </Fragment> */}
      </SimpleContext.Provider>
    );
  }
}

// export default Radium(App);
export default App;
