import React from "react";
import SelectUser from "./SelectUser";
import TableUser from "./TableUser";
import MyContext from'../../MyContext/MyContext';
import { useState } from 'react';
export default function HomePage(props) {
  const [userID,setUserID]= useState(0);
  const [useAmount,setUseAmount] = useState(0)
  return (
    <MyContext.Provider value={{userID,setUserID,useAmount,setUseAmount} }>
      <div className="container ">
      <div className="p-5 border" style={{height:'600px',overflow:'auto'}}>
        <SelectUser >{props.children}</SelectUser>
        <TableUser>{props.children}</TableUser>
      </div>
    </div>
    </MyContext.Provider>
    
  );
}
