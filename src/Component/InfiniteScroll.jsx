// src/components/InfiniteScroll.js

import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InfiniteScroll.css";

const InfiniteScroll = () => {
  const scrollContainerRef = useRef(null);
  const scrollContentRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollContent = scrollContentRef.current;

    const items = Array.from(scrollContent.children);

    items.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContent.appendChild(clone);
    });

    let scrollAmount = 0;

    function scroll() {
      scrollAmount++;
      if (scrollAmount >= scrollContent.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    }

    scroll();
  }, []);

  return (
    <div className="container mt-5">
      <div
        className="scroll-container d-flex overflow-hidden position-relative"
        ref={scrollContainerRef}
      >
        <div className="scroll-content d-flex" ref={scrollContentRef}>
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/05/Token-Metrics-Airdrop.jpeg"
              alt="Sample 1"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>Point Program for Community & <br /> Engagement</p>
            </div>
          </div>
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/04/Bitop-Airdrop.jpg"
              alt="Sample 2"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>Claim a quick $20 Bonus</p>
            </div>
          </div>
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/05/Lyra-Finance-LDX-Airdrop.jpeg"
              alt="Sample 2"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>Farm Points by Trading & Staking, <br /> incl Bonus Code</p>
            </div>
          </div>
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/05/ForceFi-Galactic-Quest.jpeg"
              alt="Sample 2"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>Chance to Earn over $4,750 in Prizes</p>
            </div>
          </div>
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/05/Die-Last-Airdrop.jpg"
              alt="Sample 2"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>An In-game Airdrop, Dig & <br /> Craft Object for Upcoming Token</p>
            </div>
          </div>
            
          <div className="scroll-item d-flex flex-column align-items-center border border-info bg-dark text-light m-2">
            <img
              src="https://airdropalert.com/wp-content/uploads/2024/03/EN_Get-Bonus_02_1600%D1%85900.png"
              alt="Sample 2"
              className="carousel-image img-fluid"
            />
            <div className="scrolh4p">
              <p>Sign up for 7K Deposit Bonus</p>
            </div>
          </div>
          
          {/* Repeat the items as needed */}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
