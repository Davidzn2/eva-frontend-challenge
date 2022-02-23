import React, {useEffect, useState } from 'react';
import "./App.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios(
      'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD',
    );
    setData(result.data);
  }, [data]);

  return (
    <div className="App">
      <div>
        <label>Filter By</label>
        <select>
          <option>Name</option>
          <option>Price</option>
          <option>Market Cap</option>
          <option>Circulating supply</option>
        </select>
      </div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Circulating supply</th>
        </tr>

        <tbody>
          {/* {formattedData.map((data) => {
              return (
          <tr>
            <td>Name: {data.name}</td>
            <td>Price: {data.price}</td>
            <td>Market Cap: {data.market_cap}</td>
            <td>Circulating supply: {data.circulatingSupply}</td>
          </tr>
          );
            })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Home;