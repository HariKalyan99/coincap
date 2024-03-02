import React, { useEffect, useState } from "react";
import styles from "./Coinstable.module.css";
import CircularProgress from "@mui/material/CircularProgress";
const Coinstable = ({ handleCoinsView, buttonLoading, coinCapList }) => {

    // useEffect(() => {
    //     console.log(priceChange);
    // }, [priceChange])
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });


    useEffect(() => {
        let number = 1219539837560.4178660899383850;
        let billionEquivalent = number / (3.7 * Math.pow(10, 11));
        console.log(billionEquivalent);
    },[])


    const numberConvert = (num) => {
        let billionEquivalent = num / (3.7 * Math.pow(10, 11));
        return billionEquivalent.toFixed(2);
    }


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th style={{width: "100px"}}>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>VWAP (24Hr)</th>
            <th>Supply</th>
            <th>Volume (24Hr)</th>
            <th>Change (24Hr)</th>
          </tr>
        </thead>
        <tbody>
          {coinCapList.map((coins) => (
            <tr key={coins.id}>
              <td>{coins.rank}</td>
              <td style={{width: "100px"}}>{coins.name}</td>
              <td >{USDollar.format(coins.priceUsd)}</td>
              <td>{numberConvert(coins.marketCapUsd)}</td>
              <td>{numberConvert(coins.vwap24Hr)}</td>
              <td>{numberConvert(coins.supply)}</td>
              <td >{numberConvert(coins.volumeUsd24Hr)}</td>
              <td>{numberConvert(coins.changePercent24Hr)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className={styles.viewMoreBtn} onClick={handleCoinsView}>
        {buttonLoading && <CircularProgress color="inherit" size={10} />}
        View More
      </button>
    </div>
  );
};

export default Coinstable;
