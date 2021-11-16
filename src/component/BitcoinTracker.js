import { useEffect, useState } from "react";

function BitcoinTracker() {
  const [bitcoinPrice, setBitcoinPrice] = useState(0);

  // First API call to avoid waiting 5s when the page is loaded for the first time
  useEffect(() => trackBitcoinValue(), []);

  // API calls every 5 seconds
  useEffect(() => {
    async function fetchBtcValue() {
      const handleTracking = await setInterval(trackBitcoinValue, 5000);

      return () => {
        clearInterval(handleTracking);
      };
    }
    fetchBtcValue();
  }, []);

  const trackBitcoinValue = () => {
    const pair = "XXBTZEUR";
    const BITCOIN_URL = "https://api.kraken.com/0/public/Ticker?pair=" + pair;

    fetch(BITCOIN_URL)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setBitcoinPrice(responseData.result.XXBTZEUR["a"][0] + " €");
      });
  };

  return (
    <div>
      <h2>price: {bitcoinPrice}</h2>
      <img src="./btc-icon.gif" alt="bitcoin-logo" />
    </div>
  );
}

export default BitcoinTracker;
