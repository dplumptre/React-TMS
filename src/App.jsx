
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import UploadExcelPage from './pages/UploadExcelPage';


const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={<MainLayout/>} >
  <Route index element= {<HomePage/>} />
  <Route path='/upload-excel' element= {<UploadExcelPage/>} />
  
  </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
