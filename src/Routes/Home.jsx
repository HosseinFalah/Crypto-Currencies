import React from 'react'
import CoinSearch from '../Components/CoinSearch'

const Home = ({coins}) => {
  return (
    <div>
      <CoinSearch coins={coins}/>
    </div>
  )
}

export default Home