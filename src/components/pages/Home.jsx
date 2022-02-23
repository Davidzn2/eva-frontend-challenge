import React, { useEffect, useState } from "react";
import "../../index.css";
import axios from "axios";
import Header from '../common/Header'
import { Button, Col, Table } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
const Home = () => {
  const [dataAPI, setDataAPI] = useState([]);
  const URL_BASE =
    "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD";

  useEffect(() => {
    axios
      .get(URL_BASE, {
        headers: {
        },
      })
      .then((data) => {
        let cryptos = data.data.RAW;
        console.log(cryptos);
        let formattedData = [];
        Object.keys(cryptos).map((crypto) => {
          formattedData.push({
            key: crypto,
            price: cryptos[crypto]["USD"]["PRICE"],
            market_cap: cryptos[crypto]["USD"].MKTCAP,
            circulating_supply: cryptos[crypto]["USD"].SUPPLY,
            name: cryptos[crypto]["USD"]["FROMSYMBOL"],
          });
        });
        setDataAPI(formattedData);
      })
      // .then(console.log(dataAPI))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />

      <Table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Circulating supply</th>
          <th>Detail</th>
        </tr>

        <tbody>
          {dataAPI.map((data) => {
            return (
              <tr>
                <td>Name: { data.name }</td>
                <td>Price: ${data.price}</td>
                <td>Market Cap: {data.market_cap}</td>
                <td>Circulating supply: {data.circulating_supply}</td>
                <td>
                  <Link to={`/crypto/${data.name}`}>
                    <Button as={Col} variant="primary">{data.name}</Button>
                  </Link>

                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
