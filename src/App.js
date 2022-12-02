import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import { ThemeProvider } from './Context/ThemeContext';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Signin from './Routes/Signin';
import Signup from './Routes/Signup';
import Account from './Routes/Account';
import axios from 'axios'
import './App.css';
import CoinPage from './Routes/CoinPage';
import Footer from './Components/Footer';
import { AuthContextProvider } from './Context/AuthContext';

const App = () => {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'
  
  useEffect(() => {
      axios.get(url)
        .then(response => {
          setCoins(response.data)
          setLoading(false)
        })
  }, [url])

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home loading={loading} coins={coins}/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=":coinId"/>
          </Route>
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
