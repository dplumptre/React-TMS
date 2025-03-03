import { useEffect, useState } from "react";

const ExcelModal = ({ show, onClose, logUrl }) => {
  const [logData, setLogData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (show && logUrl) {
      setLoading(true);
      fetch(logUrl)
        .then((response) => response.json())
        .then((data) => {
          setLogData(data);
          setLoading(false);
        })
        .catch(() => {
          setLogData(null);
          setLoading(false);
        });
    }
  }, [show, logUrl]);

  if (!show) return null;

  return (
    <div className="modal fade show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5>Report</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {loading ? (
              <p>Loading...</p>
            ) : logData ? (
              <pre>{JSON.stringify(logData, null, 2)}</pre>
            ) : (
              <p>No report available.</p>
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

export default ExcelModal;
