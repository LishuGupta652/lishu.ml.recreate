import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const NFTListStyled = styled.div`
  width: 95%;
  margin: 0 auto;
`;
const NFTList = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x512C67ecE7670b9E192291e64912cAdd51B53802"
      );
      setPunkListData(openseaData.data.assets);
      console.log(punkListData);
    };
    return getMyNfts();
  }, []);
  return (
    <NFTListStyled>
      <h1>NFTList</h1>
    </NFTListStyled>
  );
};

const CollectionCard = ({ image, id, name, traits, weth }) => {
  return (
    <div className="collectionCard">
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id"> . #{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} alt={name} className="wethImage" />
          <div className="price">{traits[0].value}</div>
        </div>
      </div>
    </div>
  );
};

export default NFTList;
