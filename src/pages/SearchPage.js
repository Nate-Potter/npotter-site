import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";

const SearchPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState("google");

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchEngines = {
      google: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      duckduckgo: `https://duckduckgo.com/?q=${encodeURIComponent(query)}`,
      bing: `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      brave: `https://search.brave.com/search?q=${encodeURIComponent(query)}`,
    };

    const url = searchEngines[engine] || searchEngines.google;
    window.open(url, "_blank");
  };

  return (
    <div className="page contact-page">
      <div className="blur">
        <div className="glass-container">
          <div className="contact-title">
            <h1>Search the Web</h1>
          </div>
          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="input-row">
                <input
                  type="text"
                  name="SEARCH"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search something..."
                />
              </div>
              <div className="input-row">
                <select value={engine} onChange={(e) => setEngine(e.target.value)}>
                  <option value="google">Google</option>
                  <option value="duckduckgo">DuckDuckGo</option>
                  <option value="bing">Bing</option>
                  <option value="brave">Brave</option>
                </select>
              </div>
              <button className="button1" type="submit">
                Search
              </button>
            </form>
          </div>
          <ul className="social-buttons">
            <li>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-github" className="social-icons github" />
              </a>
            </li>
            <li>
              <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-regular fa-envelope" className="social-icons envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
