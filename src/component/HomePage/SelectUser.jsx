import React, { Fragment } from "react";
import  { useEffect, useState ,useContext} from 'react';
import MyContext from "../../MyContext/MyContext";
import axios from 'axios';

export default function SelectUser(props) {
  const [data, setData] = useState([]);
  const {useAmount} = useContext(MyContext)
  const {userID,setUserID} = useContext(MyContext);
  const getUserID = (event) =>{
    setUserID(event.target.value)
  }
  useEffect(() => {
    // Call the API inside the useEffect hook
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [userID]);
  return (
    <Fragment>
     <div>
      <div className="row border py-2">
        <div className="col-6">
          <select class="custom-select w-25" type="input" onChange={getUserID}>
            <option >Choose User</option>
            {data.map(item =>(
              <option key={item.id} value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="col-6">
          <h3 className="text-info">Task Done : <span className="text-warning">{useAmount}/20</span></h3>
        </div>
      </div>
     </div>
    </Fragment>
  );
}
