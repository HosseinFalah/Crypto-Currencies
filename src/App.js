import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Context/ThemeContext';
import Home from './Routes/Home';
import Signin from './Routes/Signin';
import Signup from './Routes/Signup';
import Account from './Routes/Account';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </ThemeProvider>
  )
}

export default App