
# Advanced-Task-Management-System


- Ademola Plumptre [dplumptre@yahoo.com]
- 1.0, Feb 26, 2025: Readme...
- Laravel 12
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




```

Go to the project directory

```bash
  cd tms
```

Go to a config file in  src > utils > config.js and update the api url like so below

```bash

export const BASE_URL = "http://tms.test/api";
export const IMAGE_BASE_URL = "http://tms.test";


enter
```bash
npm start
```



