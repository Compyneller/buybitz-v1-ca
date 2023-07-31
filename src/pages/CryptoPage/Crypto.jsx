import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";

import BigScrennComp from "./BigScrennComp";
import MobileComp from "./MobileComp";
const Crypto = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [globalData, setGlobalData] = useState([]);
  useEffect(() => {
    window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
        );
        setLoading(false);
        setCryptoData(data);
      } catch (error) {
        setLoading(false);
        window.alert(error.message);
      }
    };
    fetchCryptoData();
    const fetchGlobalData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/global`
        );
        setGlobalData(data);
      } catch (error) {
        window.alert(error.message);
      }
    };
    fetchGlobalData();
    return () => {
      fetchCryptoData();
      fetchGlobalData();
    };
  }, []);
  useEffect(() => {
    const resize = window.addEventListener("resize", () => {
      window.innerWidth <= 1000 ? setIsMobile(true) : setIsMobile(false);
    });

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Container className="py-5">
      <h1 className="fw-semibold">Prices</h1>
      <br />
      <h4 className="text-center" style={{ fontWeight: 600 }}>
        The Global cryptocurrency market cap is today is{" "}
        <span className="text-primary">
          $
          {Intl.NumberFormat("en", { notation: "compact" }).format(
            globalData?.data?.total_market_cap?.usd
          )}
        </span>
        , a{" "}
        <span className="text-success">
          {+globalData.data?.market_cap_change_percentage_24h_usd.toFixed(2)}%
        </span>{" "}
        change from 24 hours ago.
      </h4>
      <br />
      <br />
      {loading ? (
        <div className="d-flex justify-content-center w-100">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : isMobile ? (
        <MobileComp data={cryptoData} />
      ) : (
        <BigScrennComp data={cryptoData} />
      )}

      {/* <CustomPagination active={active} setActive={setActive} /> */}
    </Container>
  );
};

export default Crypto;
