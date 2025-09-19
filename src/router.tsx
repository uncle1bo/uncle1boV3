import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
const router = createBrowserRouter([
  {
    path: `/`,
    element: <HomePage />,
  },
]);
export default function AppRouter() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
