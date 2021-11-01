import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, newsUrl, mode} = this.props;
    return (
      <div className = {`my-2`}>
        <div className={`card bg-${mode}`}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className={`card-body text-${mode==="light" ? "dark" : "light"}`}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>
            <a rel="noreferrer" href={newsUrl}  target = "_blank" className={`btn btn-${mode==="light" ? "dark" : "light"} btn-sm`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
