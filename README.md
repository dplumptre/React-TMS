
# Advanced-Task-Management-System


- Ademola Plumptre [dplumptre@yahoo.com]
- 1.0, Feb 26, 2025: Readme...
- React v 19
- git Url : https://github.com/dplumptre/React-TMS

The Task Management System is designed to allow users to effectively manage their tasks through a backend API (Laravel) and a ReactJS frontend. Users will be able to perform CRUD operations on tasks, upload tasks in bulk using an Excel file, process the file asynchronously with a job/queue system, and upload/display task images.




## Features

- Task Management: Users can create, read, update, and delete tasks.
- Excel File Upload: Bulk addition of tasks via an Excel file upload.
- Background Processing: Task files are processed asynchronously using a job/queue system.
- Task Image Upload: Allows users to upload images for tasks and display them within the system.




## Requirements

-   Must have installed node on your machine




## Steps

Clone the project

```bash
  git clone https://github.com/dplumptre/React-TMS.git
```


Go to the project directory

```bash
  cd React-TMS
```

Install dependencies
```bash
  npm install
```

Go to a config file in  src > utils > config.js and update the api url like so below

```bash
export const BASE_URL = "http://tms.test/api";
export const IMAGE_BASE_URL = "http://tms.test";
```

start your project 
```bash
npm start
```
<img width="919" alt="Screenshot 2025-03-03 at 01 35 29" src="https://github.com/user-attachments/assets/e4459db0-c506-46b8-8969-577b9571b513" />

<img width="887" alt="Screenshot 2025-03-03 at 02 02 34" src="https://github.com/user-attachments/assets/817e4ccd-a600-466b-93b3-cf6d1c8fb1ff" />

<img width="878" alt="Screenshot 2025-03-03 at 02 03 09" src="https://github.com/user-attachments/assets/3bed8cd3-170a-4b35-bd3e-897b02477a12" />

<img width="872" alt="Screenshot 2025-03-03 at 02 03 01" src="https://github.com/user-attachments/assets/7df24c41-a21c-4c34-a8f5-c8746866a811" />




