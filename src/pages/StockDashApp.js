import React, { useState, useEffect } from "react";
import "react-day-picker/dist/style.css";

const StockDashApp = () => {
  // ---- DEFAULT WATCHLIST ----
  const defaultTickers = [
    "JOBY",
    "ACHR",
    "QUBT",
    "QBTS",
    "IONQ",
    "SOUN",
    "BBAI",
    "EVTL",
    "SEV",
    "SERV",
  ];

  // ---- FMP API KEY ----
  const API_KEY = "fJSdXRS2dUJ5SiCe3ZXfUd7M9lPFPaKK";

  // ---- PORTFOLIO STATE ----
  const [portfolio, setPortfolio] = useState(() => {
    const saved = localStorage.getItem("portfolio");
    return saved
      ? JSON.parse(saved)
      : defaultTickers.map((t) => ({
          symbol: t,
          shares: 0,
          cost: 0,
        }));
  });

  // ---- PRICE DATA ----
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);

  // ---- SAVE TO LOCAL STORAGE ----
  useEffect(() => {
    localStorage.setItem("portfolio", JSON.stringify(portfolio));
  }, [portfolio]);

  // ---- FETCH PRICES FROM FMP ----
  const fetchPrices = async () => {
    setLoading(true);
    try {
      const symbols = portfolio.map((p) => p.symbol).join(",");
      const url = `https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=${API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      const priceMap = {};
      data.forEach((item) => {
        priceMap[item.symbol] = {
          price: item.price,
          change: item.change,
          changePercent: item.changesPercentage,
        };
      });

      setPrices(priceMap);
    } catch (err) {
      console.error("Price fetch error:", err);
    }
    setLoading(false);
  };

  // ---- REALTIME REFRESH EVERY 30 SECONDS ----
  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  // ---- UPDATE SHARES / COST ----
  const updateField = (symbol, field, value) => {
    setPortfolio((prev) =>
      prev.map((stock) => (stock.symbol === symbol ? { ...stock, [field]: value } : stock))
    );
  };

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio Tracker</h1>

      <div className="update-info">{loading ? "Refreshing prices..." : "Prices updated."}</div>

      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Price</th>
            <th>Shares</th>
            <th>Cost Basis</th>
            <th>Value</th>
            <th>Gain / Loss</th>
          </tr>
        </thead>

        <tbody>
          {portfolio.map((stock) => {
            const price = prices[stock.symbol]?.price ?? 0;
            const value = stock.shares * price;
            const gain = value - stock.shares * stock.cost;

            return (
              <tr key={stock.symbol}>
                <td className="symbol">{stock.symbol}</td>
                <td>${price ? price.toFixed(2) : "--"}</td>

                <td>
                  <input
                    type="number"
                    value={stock.shares}
                    onChange={(e) => updateField(stock.symbol, "shares", Number(e.target.value))}
                    className="input"
                  />
                </td>

                <td>
                  <input
                    type="number"
                    value={stock.cost}
                    onChange={(e) => updateField(stock.symbol, "cost", Number(e.target.value))}
                    className="input"
                  />
                </td>

                <td>${value.toFixed(2)}</td>

                <td className={gain > 0 ? "gain" : gain < 0 ? "loss" : ""}>
                  {gain >= 0 ? "+" : ""}${gain.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p className="note">Auto-refreshes every 30 seconds. Data from FMP.</p>
    </div>
  );
};

export default StockDashApp;
