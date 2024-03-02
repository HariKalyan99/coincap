import { useEffect, useState } from 'react';
import './App.css';

import axios from 'axios';
import Coinstable from './components/Coinstable';

function App() {

  const [limit, setLimit] = useState(20);
  const [coinCapList, setCoinCapList] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  

  useEffect(() => {
    const controller = new AbortController();
    const {signal} = controller;
    const fetchCoins = async(limit) => {
      
      try{
        const {data} = await axios.get(`https://api.coincap.io/v2/assets?offset=0&limit=${limit}`, {signal});
        setCoinCapList(data.data);
      }catch(Error){
        console.log("Error", Error);
      }finally{
        setButtonLoading(false);
      }
    }
    
    const timer = setInterval(() => {
      fetchCoins(limit);
    }, 500)

    return () => {
      controller.abort();
      clearInterval(timer);
    }
  }, [limit])

  const handleCoinsView = () => {
    setLimit((prevLimit) => prevLimit + 40)
    setButtonLoading(true);
  }

  return (
    <div>
      <Coinstable handleCoinsView={handleCoinsView} buttonLoading={buttonLoading} coinCapList={coinCapList} />
    </div>
  )
}

export default App
