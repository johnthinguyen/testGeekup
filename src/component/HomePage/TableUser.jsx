import React, { useContext } from "react";
import TaskDone from "./TaskDone";
import TaskNotDone from "./TaskNotDone";
import { useEffect, useState } from "react";
import MyContext from "../../MyContext/MyContext";
import axios from "axios";

export default function TableUser() {
  const [data, setData] = useState([]);
  const [dataFromChild,setDataFromChild] = useState({})
  const { userID } = useContext(MyContext);
  const { useAmount, setUseAmount } = useContext(MyContext);

  useEffect(() => {
    // Call the API inside the useEffect hook
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userID}/todos`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userID, useAmount]);
  const getDataFromChild = (data) =>{
    setDataFromChild(data)
  }
  const taskNotDone = data.filter((item) => item.completed === false);
  const taskDone = data.filter((item) => item.completed === true);
  setUseAmount(taskDone.length);
  
 
  return (
    <div className="mt-5 ">
      <div className="list-group border-bottom">
        <div className="p-5 border" style={{ height: "500px", overflow: "auto", background: "white" }}
        >
          <h2 className="text-info">Task Not Done</h2>
          <TaskNotDone renderTask={taskNotDone} getDataFromChild={getDataFromChild} />
          <h2 className="text-info mt-5">Task Done</h2>
          <TaskDone renderTask={taskDone} />
        </div>
      </div>
    </div>
  );
}
