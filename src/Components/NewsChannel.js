import React, { Component } from "react";

export class NewsChannel extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={
            {display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'}
          }> 
        <span class="badge rounded-pill bg-danger" >{source}</span>

          </div>
          <img
            src={
              !imageUrl
                ? "https://katu.com/news/loa/tesla-theft-ring-busted-in-portland-our-recovered-two-suspects-arrested"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsChannel;