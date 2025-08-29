import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import router from './Components/Shared/Route/Route/Route';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
