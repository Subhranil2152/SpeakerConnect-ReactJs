import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Card.css";

export class Card extends Component {
  render() {
    let { title, description, imgUrl, email } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "16rem", backgroundColor: '#4A5E6A' }}>
          <img src={imgUrl ? imgUrl : "https://as1.ftcdn.net/v2/jpg/02/60/28/22/1000_F_260282262_8pYvjq98FTz7MscAGPXpWPvm7VGgz9yx.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <Link to={`mailto:${email}`} className="btn btn-sm">Drop a Mail</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;