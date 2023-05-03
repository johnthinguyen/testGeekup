import React from "react";

export default function TaskDone(props) {
  return (
    <div>
      {props.renderTask.map((item) => {
        return (
          <div className="mt-3">
            <p
              key={item.id}
              href="#"
              class="list-group-item list-group-item-action list-group-item-success "
            >
              <i class="fa-solid fa-calendar-check mx-5"></i>
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
