import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner, { Spinner } from "./Spinner";

export class News extends Component {
    

  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
        articles : [],
        loading : false,
        page : 1,
        totalResults : 0,
        pageSize : 12
    }
  }

  async componentDidMount(){
    this.setState({loading : true});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d960c7f2025e4bdfbe7a253f8d83cabc&page=1&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults});
    this.setState({loading : false});
  }


    async handleClick(prev){
    let url = "";
    this.setState({loading : true});
    if(prev){
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d960c7f2025e4bdfbe7a253f8d83cabc&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
      this.setState({page : this.state.page - 1});
    }else{
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d960c7f2025e4bdfbe7a253f8d83cabc&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      this.setState({page : this.state.page + 1});
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({articles : parsedData.articles});
    this.setState({loading : false});
  }

  // {// handleNextClick = async ()=>{
  //   console.log("Next");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d960c7f2025e4bdfbe7a253f8d83cabc&page=${this.state.page + 1}&pageSize=18`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     articles : parsedData.articles,
  //     page : this.state.page + 1
  //   });
  // }

  // handlePrevClick = async ()=>{
  //   console.log("Prev");
  //   let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=d960c7f2025e4bdfbe7a253f8d83cabc&page=${this.state.page - 1}&pageSize=18`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     articles : parsedData.articles,
  //     page : this.state.page - 1
  //   });
  // }
// }
  render() {


    return (
      <div className="container my-2">
        <h2 className = {`text-center text-${this.props.mode==="light" ? "dark" : "light"}`}>News Daily - Top {this.props.category} Headlines </h2>
        {this.state.loading && <Spinner />}
        <div className="row my-2">
            {!this.state.loading && this.state.articles.map((element)=>{
                return  <div className="col-md-4 h-50" key = {element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 60) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://aithority.com/wp-content/uploads/2021/10/NASAs-Juno-Science-Results-Offer-First-3D-View-of-Jupiter-Atmosphere.jpg"}
                  newsUrl = {element.url}
                  author = {element.author}
                  date = {element.publishedAt}

                  mode = {this.props.mode} 
                />
              </div>
            })}
     
        </div>

        <div className="container d-flex justify-content-between">
          <button type="button" class={`btn btn-${this.props.mode==="light" ? "dark" : "light"}`}  onClick = {()=> this.handleClick(true)} disabled = {this.state.page <= 1}>&larr; Previous</button>
          <button type="button"  class={`btn btn-${this.props.mode==="light" ? "dark" : "light"}`} onClick = {()=> this.handleClick(false)} disabled = {this.state.page === Math.ceil(this.state.totalResults / this.state.pageSize)}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
