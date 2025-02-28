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
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/:id" element={<SingleTopicPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/practice/:id" element={<QuizPage />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;