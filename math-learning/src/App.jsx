import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import './App.css'
import { Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SingleTopicPage from './pages/SingleTopicPage';
import PracticePage from './pages/PracticePage';
import QuizPage from './pages/QuizPage';

function App() {
   const router = createBrowserRouter(createRoutesFromElements(
      <Route >
       <Route index element={<HomePage />}></Route>
       <Route path='/:id' element={<SingleTopicPage />}></Route>
       <Route path='/practice' element={<PracticePage />}></Route>
       <Route path='/practice/:id' element={<QuizPage/>}></Route>
       
        {/* <Route path='/jobs' element={<JobsPage />}></Route>
        
        
        <Route path='*' element={<NotFoundPage />}></Route>
      
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}></Route>

        <Route path='/jobs/:id' element={<JobPage deleteJob={ deleteJob} />} loader={jobLoader}></Route>
        <Route path='/edit-jobs/:id' element={<EditJobPage updatedJobSubmit={updatedJob} />} loader={jobLoader}></Route> */}
      
      
      </Route>)
  );

  return (
    <>
      <div >
      <RouterProvider  router={router}></RouterProvider>;
      </div>
     
    </>
  )
}

export default App
