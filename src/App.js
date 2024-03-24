import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
import router from './router';
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
