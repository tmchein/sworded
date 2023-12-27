import Demo from './pages/demo';
import Landing from './pages/landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/demo',
    element: <Demo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
