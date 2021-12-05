import React, { Component } from "react";
import NewsItem from "./NewsItem";
import spinner, { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    console.log("Constructor called");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      pageSize: 9,
    };
  }


  async componentDidMount() {
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.state.pageSize}`;

    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.setState({ loading: false });
    this.props.setProgress(100);
  }

  // async handleClick(prev) {
  //   let url = "";
  //   this.setState({ loading: true });
  //   if (prev) {
  //     url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.state.pageSize}`;
  //     this.setState({ page: this.state.page - 1 });
  //   } else {
  //     url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`;
  //     this.setState({ page: this.state.page + 1 });
  //   }



  //   this.setState({ articles: parsedData.articles });
  //   this.setState({ loading: false });
  // }

  // {// handleNextClick = async ()=>{
  //   console.log("Next");

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

  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   // console.log(parsedData);
  //   this.setState({
  //     articles : parsedData.articles,
  //     page : this.state.page - 1
  //   });
  // }
  // }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
    // this.handleClick(false);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles)
    });

  };

  render() {
    return (

      <div className="container my-2">
        
        <h2
          className={`text-center text-${this.props.mode === "light" ? "dark" : "light"
            }`}
        >
          News Daily - Top {this.props.category} Headlines{" "}
        </h2>
        {this.state.loading && <Spinner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-2">
              {this.state.articles.map((element) => {
                  // {console.log(this.state.articles.length)}
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
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button type="button" class={`btn btn-${this.props.mode==="light" ? "dark" : "light"}`}  onClick = {()=> this.handleClick(true)} disabled = {this.state.page <= 1}>&larr; Previous</button>
          <button type="button"  class={`btn btn-${this.props.mode==="light" ? "dark" : "light"}`} onClick = {()=> this.handleClick(false)} disabled = {this.state.page === Math.ceil(this.state.totalResults / this.state.pageSize)}>Next &rarr;</button>
        </div> */}

      </div>
    );
  }
}

export default News;
