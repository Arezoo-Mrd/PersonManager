import {createContext} from 'react'

const SimpleContext =createContext({
    state:{},
    handelDeletePerson:()=>{},
    handelNameChangr: ()=>{},
    handelNewPerson:()=>{},
    setPerson:()=>{}
})
export default SimpleContext