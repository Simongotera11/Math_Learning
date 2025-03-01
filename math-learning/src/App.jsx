import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import SingleTopicPage from './pages/SingleTopicPage';
import PracticePage from './pages/PracticePage';
import QuizPage from './pages/QuizPage';
import MainLayout from './components/MainLayout';

function App() {
  // Create the router configuration
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}> {/*this is the main layout of the app*/ }
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<SingleTopicPage />} /> { /*this is the page that explains the lessons dynamically*/ }
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:id" element={<QuizPage />} /> {/* this is the page that displays each quiz dynamically*/ }
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;