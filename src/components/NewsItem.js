import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageUrl, newsUrl, mode, author, date} = this.props;
    return (
      <div className = {`my-2`}>
        <div className={`card bg-${mode}`}>
          <img src={imageUrl} className="card-img-top img-fluid" alt="..." />
          <div className={`card-body text-${mode==="light" ? "dark" : "light"} `}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
              {description}...
            </p>


            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>

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
