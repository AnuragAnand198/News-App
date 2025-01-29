import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard =({category}) =>{
  const [artice, setartice] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setartice(data.articles))
      .catch((error) => {
        console.error("Error fetching the news:", error);
      });
  }, [category]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {artice.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
}

export default Newsboard;
