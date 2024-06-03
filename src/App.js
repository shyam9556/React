import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import {Mainlayout} from './layouts/Mainlayout';
import{ HomePage} from './pages/HomePage';
import {JobsPage }from './pages/JobsPage';
import {NotFoundPage }from './pages/NotFoundPage';
import {JobPage}  from './pages/JobPage';
import {AddJobPage} from './pages/AddJobPage';
import Register from './pages/Register';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  Login  from './pages/Login';


const App = () => {


  // Add New Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
     
      <Route path='/' element={<Mainlayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path='/jobs/:id'
          element={<JobPage />}
         
        />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Login' element={<Login />} />


      </Route>
    )
  );
  
  return (
    <>

   <ToastContainer></ToastContainer>
   
    
  <RouterProvider router={router} />
  
    </>

);
};
export default App;