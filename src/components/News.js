import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import  Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const News = (props)=> {
 

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  const [pageSize, setPageSize] = useState(9)

  useEffect(async () => {
    setLoading(true);
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=1&pageSize=${pageSize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
  }, [])
 

  
  const fetchMoreData = async () => {
   
    setPage(page + 1);
    
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    

  };


    return (

      <div className="container my-2">
        
        <h2
          className={`text-center text-${props.mode === "light" ? "dark" : "light"
            }`}
        >
          News Daily - Top {props.category} Headlines{" "}
        </h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={totalResults !== articles.length}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-2">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 h-50" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 40) : ""}
                      description={
                        element.description ? element.description.slice(0, 60) : ""
                      }
                      imageUrl={
                        element.urlToImage ? element.urlToImage
                          : "https://aithority.com/wp-content/uploads/2021/10/NASAs-Juno-Science-Results-Offer-First-3D-View-of-Jupiter-Atmosphere.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      mode={props.mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        
      </div>
    );
  
}

export default News;
