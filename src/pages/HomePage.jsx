import { useEffect, useState } from "react";

import TaskModal from "../components/TaskModal"; 
import TaskTable from "../components/TaskTable";
import { BASE_URL } from "../utils/config";


const HomePage = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isView,setIsView] = useState(false);
  const [loading, setIsLoading] = useState(false)

  const [tasks, setTasks] = useState([]);
  const [taskId, setTaskId]= useState();
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errors, setErrors] = useState({});
  

  const [task, setTask] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "Medium",
    image: null,
  });





  useEffect( ()=>{
    const getAllTasks = async()=>{
      const url = `${BASE_URL}/tasks`;
      try{
        const response = await fetch(url);
        if (!response.ok) {
          console.log(response);
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json.data);
        setTasks(json.data);
      } catch (e) {
        console.error("Error fetching tasks:", e);
      }
    }
    getAllTasks();
  },[])


  




const createTask = async (data) => {
  const uri = `${BASE_URL}/tasks`;
  
  const formData = new FormData();
  setIsLoading(true)

  for (const key in data) {
    if (data[key] !== null && key !== "image") {
      formData.append(key, data[key]);
    }
  }
  if (data.image) {
    formData.append("image", data.image);
  }

  console.log(formData);
  try {
      const response = await fetch(uri, {
        method: 'POST',
        body: formData,
        headers:{
          'Accept': 'application/json'
        }
    });
    if (!response.ok) {
      setIsLoading(false)
      console.log(response);
      const errorText = await response.text(); 
      console.error(`Error: ${response.status} - ${errorText}`);
      if (response.status === 422) {
        const errorData = JSON.parse(errorText); 
        setErrors(errorData.errors);
      }
      
    }
      const json = await response.json();
      console.log(json)
      if(json.success){
        setSuccessMessage(json.message);
        setTasks((prevTasks) => [json.data,...prevTasks]);
        setErrors({});
        setIsLoading(false)
      }else{
        setErrorMessage(json.message)
        setIsLoading(false)
      }
  } catch (e) {
    setIsLoading(false)
      return e;
  }    

}



const editTask = async (taskId, data) => {
  const uri = `${BASE_URL}/tasks/${taskId}`;
  setIsLoading(true)
  const formData = new FormData();
  formData.append("_method", "PUT");
  for (const key in data) {
    if (data[key] !== null && key !== "image") {
      formData.append(key, data[key]);
    }
  }
  
  if (data.image) {
    formData.append("image", data.image);
  }

  console.log("FormData:", formData);

  try {
    const response = await fetch(uri, {
      method: 'post', 
      body: formData,
      headers:{
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      setIsLoading(false)
      const errorText = await response.text();
      console.error(`Error: ${response.status} - ${errorText}`);
      if (response.status === 422) {
        const errorData = JSON.parse(errorText); 
        setErrors(errorData.errors);
      }
      return;
    }

    const json = await response.json();
    console.log(json);

    if (json.success) {
      setIsLoading(false)
      setSuccessMessage(json.message);
      
      // Update the task in the list
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === taskId ? json.data : task))
      );
      setErrors({});
    } else {
      setIsLoading(false)
      setErrorMessage(json.message);
    }
  } catch (e) {
    setIsLoading(false)
    console.error("Error updating task:", e);
  }
};



  const deleteTask = async (index)=>{
    const url = `${BASE_URL}/tasks/${index}`;
  try{
    const response = await fetch(url, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error: ${response.status} - ${errorText}`);
      return;
    }
    const json = await response.json();
      console.log(json);
      setSuccessMessage(json.data.message);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== index));
   
  } catch (e) {
    console.error("Error occurred deleting:", e);
  }
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (isView) {
      return; 
    }
    if (isEdit) {
       editTask(taskId,task);
      
    } else {
    createTask(task);
    }
  };




  const handleAddTask = () => {
    setTask({
      title: "",
      description: "",
      due_date: "",
      priority: "Medium",
      image: null,
    });
    setSuccessMessage();
    setErrorMessage();
    setIsView(false);
    setIsEdit(false);
    setModalVisible(true);
    console.log(task)
  };

  const handleEditTask = (taskId,taskData) => {
    setSuccessMessage();
    setErrorMessage();
     setIsView(false);
     setTaskId(taskId);
     setTask(taskData);
     setIsEdit(true);
     setModalVisible(true);
  };


  const handleOnView = (taskData) => {
    setSuccessMessage();
    setErrorMessage();
    setIsEdit(false);
    setIsView(true);
    setModalVisible(true);
    setTask(taskData);

  };

  const handleDeleteTask = (index) => {
    deleteTask(index);
  };











  return (
    <div className="container mt-5">
      <h2 className="text-primary mb-5">List of Tasks</h2>
      <TaskTable 
      tasks={tasks} 
      onView={handleOnView}
      onEdit={(task, index) => handleEditTask(task, index)} 
      onDelete={handleDeleteTask} 
      onHandleAddTask={handleAddTask}
      />


      <TaskModal 
      show={modalVisible} 
      onClose={() => setModalVisible(false)} 
      task={task} setTask={setTask} 
      handleSubmit={handleSubmit} 
      isEdit={isEdit} 
      isView={isView}
      successMessage={successMessage}
      errorMessage={errorMessage}
      errors={errors}
      loading={loading}
      />
   
    </div>
  )
};

export default HomePage;
