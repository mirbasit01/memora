// import React from "react";
// import "./Cointrackern.css"; // Ensure the correct path to your CSS file

// function Cointrackern() {
//   return (
//     <>
//     <div className="container">
//         <div className="row">
//             <div className="Cointr">
//                 <div className="col-md-12 col-lg-12">
//                     <h5>
//                     Cointracker
//                     </h5>
//                 </div>

//             </div>

//         </div>
//         </div>

//     </>
//   );
// }

// export default Cointrackern;

//  2
import React from "react";
import "./Cointrackern.css"; // CSS file ko import karna na bhoolain

const Cointrackern = () => {
  const data = [
    { id: 1, name: "Bitcoin", price: "$20,000" },
    { id: 2, name: "Ethereum", price: "$1,500" },
    { id: 3, name: "Ripple", price: "$0.50" },
    { id: 4, name: "Litecoin", price: "$150" },
    { id: 5, name: "Cardano", price: "$0.30" },
    { id: 6, name: "Polkadot", price: "$5" },
    { id: 7, name: "Chainlink", price: "$10" },
    { id: 8, name: "Stellar", price: "$0.10" },
    { id: 9, name: "Dogecoin", price: "$0.07" },
    { id: 10, name: "VeChain", price: "$0.02" },
    { id: 11, name: "Bitcoin", price: "$20,000" },
    { id: 12, name: "Ethereum", price: "$1,500" },
    { id: 13, name: "Ripple", price: "$0.50" },
    { id: 14, name: "Litecoin", price: "$150" },
    { id: 15, name: "Cardano", price: "$0.30" },
    { id: 16, name: "Polkadot", price: "$5" },
    { id: 17, name: "Chainlink", price: "$10" },
    { id: 18, name: "Stellar", price: "$0.10" },
    { id: 19, name: "Dogecoin", price: "$0.07" },
    { id: 20, name: "VeChain", price: "$0.02" },

    //

    { VOLUM: 1, SUPPYLY: "VeChain", CHANGE: "$0.02" },
  ];

  return (
    <>
      {/* <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cointrackern">
              <table className="datatable">
                <thead>
                  <h5>Cointracker</h5>

                  <tr className="datatable-tr">
                    <th>ID</th>
                    <th>PRICE</th>
                    <th>MARKETCAP</th>
                    <th>VOLUM (24H)</th>
                    <th>SUPPYLY</th>
                    <th>CHANGE (24H)</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((coin) => (
                    <tr key={coin.id}>
                      <td>{coin.id}</td>
                      <td>{coin.name}</td>
                      <td>{coin.price}</td>
                      <td>{coin.VOLUM}</td>
                      <td>{coin.SUPPYLY}</td>
                      <td>{coin.CHANGE}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row">
 <div
        className="row card card-item card-anchor active-label aidrop-label-featured"
        data-ribbon="featured"
        data-href="https://airdropalert.com/airdrops/nekodex-trading-competition/"
        // style="cursor: pointer;"
      >
        <div className="card-header-container">
          <div className="column column1">
            <div className="logo">
              <img
                decoding="async"
                src=" https://airdropalert.com/wp-content/uploads/2024/06/nekodex.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="column column2">
            <div>
              <div tooltip="Nekodex 🐾">
                <h4 className="title">Nekodex 🐾 </h4>
              </div>

              <div
                className="card-socials card-requirements"
                // style="justify-content: "
              >
                <div tooltip="App" class="social-item">
                  <span className="icon-text">APP</span>
                </div>
                <div tooltip="Email" class="social-item">
                  <span className="email-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                </div>
                <div tooltip="Trade" class="social-item">
                  <span className="icon-text">⇆</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column column3">
            <div className="blockchain-logo" tooltip="Optimism">
              <img decoding="async" src="" />
            </div>
          </div>
        </div>
        <div className="card-airdrop-footer">
          <div className="value">
            <div className="amount">30M $Nekocoin 🤯 </div>
            <div className="approx">Risk-Free Trading 📈 </div>
          </div>
          <div className="value">
            <div className="amount">Mobile Perp DEX📱 </div>
            <div className="approx">By Perpetual Protocol🛡️ </div>
          </div>
        </div>
      </div>
        </div>
      </div>
     
    </>
  );
};

export default Cointrackern;

//  3

//                                                 import React, { useEffect, useRef } from 'react';
// import Chart from 'chart.js/auto';
// import './Cointrackern.css'; // CSS file ko import karna na bhoolain

// const Cointrackern = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');
//     new Chart(ctx, {
//       type: 'line',
//       data: {
//         labels: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin', 'Cardano', 'Polkadot'],
//         datasets: [{
//           label: 'Price in USD',
//           data: [20000, 1500, 0.5, 150, 0.3, 5],
//           backgroundColor: 'rgba(54, 162, 235, 0.2)',
//           borderColor: 'rgba(54, 162, 235, 1)',
//           borderWidth: 1,
//           tension: 0.1,
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }, []);

//   const data = [
//     { id: 1, name: 'Bitcoin', price: '$20,000' },
//     { id: 2, name: 'Ethereum', price: '$1,500' },
//     { id: 3, name: 'Ripple', price: '$0.50' },
//     { id: 4, name: 'Litecoin', price: '$150' },
//     { id: 5, name: 'Cardano', price: '$0.30' },
//     { id: 6, name: 'Polkadot', price: '$5' },
//     { id: 7, name: 'Chainlink', price: '$10' },
//     { id: 8, name: 'Stellar', price: '$0.10' },
//     { id: 9, name: 'Dogecoin', price: '$0.07' },
//     { id: 10, name: 'VeChain', price: '$0.02' },
//   ];

//   return (
//     <div className="cointrackern">
//       <h1>Cryptocurrency Prices</h1>
//       <div className="chart-container">
//         <canvas ref={chartRef}></canvas>
//       </div>
//       <table className="datatable">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((coin) => (
//             <tr key={coin.id}>
//               <td>{coin.id}</td>
//               <td>{coin.name}</td>
//               <td>{coin.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Cointrackern;
