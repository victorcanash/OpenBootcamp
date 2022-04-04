import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { loggedIn } from './utils/Logged';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TasksPage from './pages/TasksPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' 
          element={
            loggedIn ?
              (<Navigate replace to='/tasks'/>) :
              (<Navigate replace to='/login'/>)
          }
        />
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route exact path='/tasks' 
          element={
            loggedIn ?
              (<TasksPage/>) :
              (<Navigate replace to='/login'/>)
          }
        />
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
