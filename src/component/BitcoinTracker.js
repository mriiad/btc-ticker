import { useEffect, useState } from "react";

function BitcoinTracker() {
  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  useEffect(() => {
    const BITCOIN_URL =
      "http://api.kraken.com/0/public/AssetPairs?pair=XXBTZUSD,XETHXXBT";

    fetch(BITCOIN_URL)
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setBitcoinPrice(responseData.result.XXBTZEUR["a"][0] + " €");
      });
  }, []);
  return (
    <div>
      <h2>price: {bitcoinPrice}</h2>
      <img src="./1016331-middle.png" alt="bitcoin-logo" />
    </div>
  );
}

export default BitcoinTracker;
