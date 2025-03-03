
import { BASE_URL,IMAGE_BASE_URL } from "../utils/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "../utils/icons";


const TaskModal = ({ show, onClose, task, setTask, handleSubmit, isView, isEdit , successMessage , errorMessage,errors, loading}) => {
  if (!show) return null; 


  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setTask((prev) => ({
      ...prev,
      image: file || null, 
    }));
  };


  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {isView}
          <h5>{isView ? "View Image" : isEdit ? "Edit Task" : "Add Task"}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">

{isView ? (
  <div> 
    {
        task.image_url && <img src={`${IMAGE_BASE_URL}/${task.image_url}`} alt="Task" height={200} width={200}  crossOrigin="anonymous" />
       
    }

  </div>
) : (
            <form onSubmit={handleSubmit} className="p-4">
              {/* Title */}
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
               
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                  value={task.title}
                  onChange={handleChange}
                //   required
                />
              {errors.title && <div className="text-danger">{errors.title[0]}</div>}
              </div>
     

              {/* Description */}
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control"
                  rows="3"
                  value={task.description}
                  onChange={handleChange}
                //   required
                ></textarea>
                 {errors.description && <span className="text-danger">{errors.description[0]}</span>}
              </div>
             


              {/* Due Date */}
              <div className="mb-3">
                <label htmlFor="due_date" className="form-label">
                  Due Date
                </label>
                <input
                  type="date"
                  id="due_date"
                  name="due_date"
                  className="form-control"
                  value={task.due_date}
                  onChange={handleChange}
                //   required
                />
                              {errors.due_date && <span className="text-danger">{errors.due_date[0]}</span>}
              </div>



              {/* Priority Dropdown */}
              <div className="mb-3">
                <label htmlFor="priority" className="form-label">
                  Priority
                </label>
                <select
                  id="priority"
                  name="priority"
                  className="form-select"
                  value={task.priority}
                  onChange={handleChange}
                //   required
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                {errors.priority && <span className="text-danger">{errors.priority[0]}</span>}
              </div>



              {/* Image Upload */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Upload Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                        {errors.image && <span className="text-danger">{errors.image[0]}</span>}
              </div>
      
             
              {/* Submit Button */}
              <button type="submit" className="btn btn-primary my-3">
                {isEdit ? "Update Task" : "Add Task"}
              </button>

              {Object.keys(errors).length > 0 && (
                <div className="text-danger">Please fix the errors above.</div>
                )}

            <p>
                 { successMessage != null ? <span className="text-success">{successMessage}</span>  :"" }   
                 { errorMessage != null ? <span className="text-danger">{errorMessage}</span>  :"" }  

            </p>

                <div>{loading && <span>{<FontAwesomeIcon icon={faSpinner} spin />}</span>}</div>
            </form>
)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
