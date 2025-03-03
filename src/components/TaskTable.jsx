import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faPlus } from "../utils/icons";






const TaskTable = ({ tasks,onView, onEdit, onDelete, onHandleAddTask }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Priority</th>
          <th>Image</th>
          <th>
      <button className="btn btn-sm btn-primary" onClick={onHandleAddTask}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.due_date}</td>
              <td>{task.priority}</td>
              <td>{task.image_url ?         <span  onClick={() => onView(task)}>📷</span>   : "No Image"}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => onEdit(task.id,task)}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              No tasks available
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TaskTable;
