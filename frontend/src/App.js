import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register  from './components/Register';
import Login  from './components/Login';
import Welcome  from './components/Welcome';

import styles from './App.module.scss'


function App() {
  return (
   <BrowserRouter>
      <div classname={styles.container}>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/bienvenido/" element={<Welcome/>}/>
        </Routes>
      </div>
   </BrowserRouter>
  );
};

export default App;
