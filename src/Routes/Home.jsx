import React from 'react'
import CoinSearch from '../Components/CoinSearch'
import Trending from '../Components/Trending'

const Home = ({loading, coins}) => {
  return (
    <div>
      <CoinSearch coins={coins} loading={loading}/>
      <Trending/>
    </div>
  )
}

export default Home