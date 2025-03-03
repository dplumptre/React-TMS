import { BASE_URL } from "../utils/config";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "../utils/icons";
import ExcelModal from "../components/ExcelModal";

const UploadExcelPage = () => {
  const [file, setFile] = useState();
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [logUrl, setLogUrl] = useState(null); // Store log URL
  const [modalExcelVisible, setModalExcelVisible] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const onViewReport = (e) => {
    e.preventDefault();
    setModalExcelVisible(true);
  };

  const uploadExcel = async (file) => {
    const uri = `${BASE_URL}/tasks/upload-excel`;

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }

    setIsLoading(true);
    try {
      const response = await fetch(uri, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        setIsLoading(false);
        const errorText = await response.text();
        console.error(`Error: ${response.status} - ${errorText}`);

        if (response.status === 422) {
          const errorData = JSON.parse(errorText);
          setErrors(errorData.errors);
        }
      }

      const json = await response.json();
      console.log(json);

      if (json.success) {
        setSuccessMessage(json.message);
        setErrors({});
        setLogUrl(json.data.log_url); // Save log URL
        setIsLoading(false);
      } else {
        setErrorMessage(json.message);
        setIsLoading(false);
      }
    } catch (e) {
      setIsLoading(false);
      console.error(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadExcel(file);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 mx-4">
      <div className="container mt-5">
        <h2 className="text-primary mb-5">Upload Excel</h2>

        <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Upload Excel 
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-control"
              accept=".csv, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={handleFileChange}
            />
          </div>
          <div>{errors.file && <span className="text-danger">{errors.file[0]}</span>}</div>

          <p>
            {successMessage && <span className="text-success">{successMessage}</span>}
            {errorMessage && <span className="text-danger">{errorMessage}</span>}
          </p>

          {/* Show "View Report" button only if logUrl exists */}
          {logUrl && (
            <div>
              <button className="btn btn-sm btn-danger mt-2" onClick={onViewReport}>
                View Report
              </button>
            </div>
          )}
          

          <div>{loading && <FontAwesomeIcon icon={faSpinner} spin />}</div>

          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>

        {/* Pass logUrl to the modal */}
        <ExcelModal
          show={modalExcelVisible}
          onClose={() => setModalExcelVisible(false)}
          logUrl={logUrl}
        />
      </div>
    </div>
  );
};

export default UploadExcelPage;
