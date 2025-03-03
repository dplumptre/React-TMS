

const UploadExcelPage = () => {

 

    return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-600 mx-4">
      <div className="container mt-5">
      <h2 className="text-primary mb-5">Upload Excel</h2>




     







    <form  className="p-4 border rounded shadow">

      {/* Image Upload */}
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Upload Excel (only csv,xlsx)
        </label>
        <input
          type="file"
          id="image"
          name="image"
          className="form-control"
          accept="image/*"
         
        />
      </div>
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>





      </div>
      </div>
 
    );
  };
  
  export default UploadExcelPage;
  