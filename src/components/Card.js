import React from "react";

const Card = (props) => {
  let { imglink, title, author } = props;
  return (
    <div className="card text-center" style={{ width: "20rem" }}>
      <img src={imglink} className="card-img-top " alt="img" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{author}</p>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: "The Unknown Book",
  author: "Santosh",
};

export default Card;
