import React,{Component} from "react"; 


class Person extends Component {

componentWillUnmount(){
  console.log('Person.jsx componentWillUnmount');
}
  render() {
    const { fullName, personDelete, change } = this.props
    return (
      <div className="card text-white bg-dark my-3 w-25 mx-auto">
        <div className="card-body text-center">
          <p className="d-block">{`${fullName}`}</p>
          <div className="input-group justify-content-center">
            <input
              type="text"
              className="form-control w-50"
              placeholder={fullName}
              onChange={change}
            />
            <div className="input-group-prepend">
              <button
                className="btn btn-sm btn-danger fa fa-trash"
                onClick={personDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const Person = ({ fullName, personDelete, change }) => {
  // return (
  //   <div className="card text-white bg-dark my-3 w-25 mx-auto">
  //     <div className="card-body text-center">
  //       <p className="d-block">{`${fullName}`}</p>
  //       <div className="input-group justify-content-center">
  //         <input
  //           type="text"
  //           className="form-control w-50"
  //           placeholder={fullName}
  //           onChange={change}
  //         />
  //         <div className="input-group-prepend">
  //           <button className="btn btn-sm btn-danger fa fa-trash" onClick={personDelete}/>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
// };

export default Person;
