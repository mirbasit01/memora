// Page.js
import React, { useState } from 'react';
import './page.css';

function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pages = {
    1: (
        <div className="container">
        <div className="row">
            <div className="main-box d-flex">
                {/* 1 main box */}
            <div className="col-md-4">
          <div className="box ">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          
        </div>
      </div>
    ),
    2: (
        <div className="container">
        <div className="row">
            <div className="main-box d-flex">
                {/* 1 main box */}
            <div className="col-md-4">
          <div className="box ">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          
        </div>
      </div>
    ),
    3: (
        <div className="container">
        <div className="row">
            <div className="main-box d-flex">
                {/* 1 main box */}
            <div className="col-md-4">
          <div className="box ">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          
        </div>
      </div>
    ),
    4: (
        <div className="container">
        <div className="row">
            <div className="main-box d-flex">
                {/* 1 main box */}
            <div className="col-md-4">
          <div className="box ">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 2 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 main box */}
          <div className="col-md-4">
          <div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div><div className="box">
              <div className="d-flex">
                <div className="logo">
                  <img
                    src="https://airdropalert.com/wp-content/uploads/2024/05/Multipool-Finance.jpeg"
                    alt="Placeholder"
                  />
                </div>
                <div className="content">
                  <div className="text">Multipool Finance</div>
                  <div className="social-icons">
                    <span className="fab fa-facebook"></span>
                    <span className="fab fa-twitter"></span>
                    <span className="fab fa-linkedin"></span>
                  </div>
                </div>
              </div>
              <div className="d-flex fotter">
                <div className="details">
                  <div className="value">$MUL Airdrop 🪂</div>
                  <div className="approx">$100K Prize Pool 💥</div>
                </div>
                <div className="details pk">
                  <div className="value">RWA & Crypto Trading</div>
                  <div className="approx">The DEX with CEX appeal</div>
                </div>
              </div>
            </div>
          </div>
            </div>
          
        </div>
      </div>
    ),
  };

  return (
    <div className="content">
      {pages[currentPage]}
      <div className="pagination">
        {[1, 2, 3, 4,].map((pageNumber) => (
          <span
            key={pageNumber}
            className={`page-number ${currentPage === pageNumber && 'active'}`}
            onClick={() => changePage(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Page;
