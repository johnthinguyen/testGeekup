import React from "react";
import { useState,useEffect } from "react";
export default function TaskNotDone(props) {
const [idTask, setIdTask] = useState(0)
const [data, setData] = useState({});
  useEffect(() => {
    // Gọi API và cập nhật dữ liệu
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${idTask}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ completed: true }) // Thay đổi dữ liệu cần cập nhật
        });
        const newData = await response.json();
        setData(newData);
      } catch (error) {
        // Xử lý lỗi nếu có
      }
    };

    fetchData(); 
  }, [idTask]);
  props.getDataFromChild(data)
  return (
    <div>
      {props.renderTask.map((item) => {
        return (
          <div className="d-flex justify-content-between mt-3">
            <p
              key={item.id} 
              class="list-group-item list-group-item-action list-group-item-info "
            >
              <i class="fa-solid fa-x mx-5"></i>
              {item.title}
            </p>
            <button
              className="btn btn-info ml-3"
              onClick={() =>{
                setIdTask(item.id)
                console.log(item,'before')
              }}
            >
              Mark Done 
            </button>
          </div>
        );
      })}
    </div>
  );
}
