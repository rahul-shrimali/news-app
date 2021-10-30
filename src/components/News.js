import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    

  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
        articles : [],
        loading : true,
        page : 1,
        totalResults : 0,
        pageSize : 18
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=2a1387763d3e4cc2a092974a2cdd0c64&page=1&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults});
  }


    async handleClick(prev){
    let url = "";
    if(prev){
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a1387763d3e4cc2a092974a2cdd0c64&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
      this.setState({page : this.state.page - 1});
    }else{
      url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a1387763d3e4cc2a092974a2cdd0c64&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      this.setState({page : this.state.page + 1});
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({articles : parsedData.articles});
  }

  handleNextClick = async ()=>{
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a1387763d3e4cc2a092974a2cdd0c64&page=${this.state.page + 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      page : this.state.page + 1
    });
  }

  handlePrevClick = async ()=>{
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2a1387763d3e4cc2a092974a2cdd0c64&page=${this.state.page - 1}&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles : parsedData.articles,
      page : this.state.page - 1
    });
  }

  render() {
    return (
      <div className="container my-2">
        <h2>News Daily - Top Headlines</h2>

        <div className="row my-2">
            {this.state.articles.map((element)=>{
                return  <div className="col-md-4" key = {element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 60) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://aithority.com/wp-content/uploads/2021/10/NASAs-Juno-Science-Results-Offer-First-3D-View-of-Jupiter-Atmosphere.jpg"}
                  newsUrl = {element.url}
                />
              </div>
            })}
     
        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark"  onClick = {this.handlePrevClick} disabled = {this.state.page <= 1}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick = {()=> this.handleClick(false)} disabled = {this.state.page === Math.ceil(this.state.totalResults / this.state.pageSize)}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
