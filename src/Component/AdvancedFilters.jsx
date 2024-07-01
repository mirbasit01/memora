import React, { useState } from "react";
import "./AdvancedFilters.css";

const AdvancedFilters = () => {
  const [kyc, setKyc] = useState("");
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("featured");
  const [sort, setSort] = useState("");
  const [selectedBlockchains, setSelectedBlockchains] = useState([]);

  const handleKycChange = (e) => setKyc(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  const handleBlockchainClick = (blockchain) => {
    setSelectedBlockchains((prev) =>
      prev.includes(blockchain)
        ? prev.filter((item) => item !== blockchain)
        : [...prev, blockchain]
    );
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log({
      kyc,
      status,
      category,
      sort,
      selectedBlockchains,
    });
  };

  
  return (
    <div className="container">
      <div className="row">
        <h2 className="text-white all">Browse all airdrops</h2>

        <div className="search ">
          <div className="seacr-box mt-3">
            <h4 className="text-white">Find an airdrop</h4>
            <input
              type="text"
              id="airdrop-search-box"
              placeholder="Search airdrops"
            />
          </div>
        </div>
        <div id="advanced-filters">
          <button
            className="btn btn-project-info"
            onClick={() => {
              /* Toggle advanced filters logic here */
            }}
          >
            Advanced Filters
          </button>
          <div className="filters mb-3">
            {/* KYC Dropdown */}
            <div className="select bg-dark ">
              <select
                id="filter-kyc"
                className="bg-dark"
                value={kyc}
                onChange={handleKycChange}
              >
                <option value="">KYC? </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Status Dropdown */}
            <div className="select  ">
              <select
                id="filter-status"
                className="bg-dark"
                value={status}
                onChange={handleStatusChange}
              >
                <option value="">Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            {/* Categories Dropdown */}
            <div className="select">
              <select
                id="filter-category"
                className="bg-dark"
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Categories</option>
                <option value="defi">DeFi</option>
                <option value="earn-crypto">Earn Crypto</option>
                <option value="featured">Featured</option>
                <option value="new">New</option>
                <option value="nft">NFT</option>
                <option value="potential-airdrops">Potential</option>
                <option value="sponsored">Sponsored</option>
              </select>
            </div>
          </div>
          {/* Blockchain Dropdown */}
          <div className="custom-multiselect-dropdown select-dim text-white  mb-3">
            <button className="custom-dropbtn">
              <div className="selected-options-container">
                {selectedBlockchains.map((blockchain) => (
                  <span key={blockchain} className="selected-option">
                    {blockchain}
                  </span>
                ))}
              </div>
              <span className="button-text">Blockchain</span>
              <i className="fa-solid fa-chevron-down custom-arrow"></i>
            </button>
            <div
              className="custom-dropdown-content bg-dark overflow-auto"
              style={{ height: "100vh" }}
            >
              {[
                "Algorand",
                "Arbitrum",
                "Avalanche",
                "Base",
                "Berachain",
                "Binance",
                "Bitcoin",
                "Blast",
                "Celestia",
                "Cosmos",
                "Dogechain",
                "Ethereum",
                "Fantom",
                "GOSH",
                "Immutable",
                "Injective",
                "Linea",
                "Manta Network",
                "MultiversX",
                "Near Protocol",
                "Optimism",
                "Other",
                "Polkadot",
                "Polygon",
                "Scroll",
                "Solana",
                "Stellar",
                "Testnet",
                "TON",
                "Tron",
                "zkSync",
              ].map((blockchain, index) => (
                <div
                  key={blockchain}
                  className={`dropdown-item ${
                    selectedBlockchains.includes(blockchain) ? "selected" : ""
                  }`}
                  data-value={blockchain.toLowerCase()}
                  data-order={index}
                  onClick={() => handleBlockchainClick(blockchain)}
                >
                  {blockchain}
                </div>
              ))}
            </div>
          </div>

          {/* Sort By Dropdown */}
          <div className="select Sort  mb-3">
            <select
              id="filter-sort"
              className="bg-dark"
              value={sort}
              onChange={handleSortChange}
            >
              <option value="">Sort by</option>
              <option value="newest">Newest first</option>
              <option value="ending">Ending soon</option>
            </select>
          </div>

          {/* Search button */}
          <button
            className="btn btn-project-info "
            id="airdrop-search-btn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>


        {/* new box */}

      </div>
    </div>
  );
};

export default AdvancedFilters;
