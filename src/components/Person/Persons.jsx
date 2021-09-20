import React, { Component} from "react";

import Person from "./Person";

import SimpleContext from "../../context/SimpleContext";

class Persons extends Component {
  
  
  static contextType = SimpleContext

  shouldComponentUpdate(nextProp,nextState){
    console.log('Persons.jsx shouldComponentUpdate');

    if(nextState.persons !==this.context.state.persons){
      return true
      }else{
        return false
      }
  
  }  

    
  

  render() { 
   const {state,handelDeletePerson,handelNameChangr}=this.context
    return (  
    <div>
      {state.persons.map((person) => {
        return (
          <Person
          key={person.id}
            fullName={person.fullName}
            personDelete = {()=> handelDeletePerson(person.id)}
            change={event=>handelNameChangr(event,person.id)}
          />
        );
      })}
     </div> );
  }
}

// const Persons = () => {
 
// console.log('Persons.js');
// const context = useContext(SimpleContext)

//   return (
//     // <SimpleContext.Consumer>
//     //   {context=>(
//  <div>
//  {context.state.persons.map((person) => {
//    return (
//      <Person
//      key={person.id}
//        fullName={person.fullName}
//        personDelete = {()=> context.handelDeletePerson(person.id)}
//        change={event=>context.handelNameChangr(event,person.id)}
//      />
//    );
//  })}
// </div>
  
//     // </SimpleContext.Consumer>
   
//   );
// };

export default Persons;
