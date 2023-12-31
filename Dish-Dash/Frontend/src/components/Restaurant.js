import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({ restaurant }) => {
  return (
    <div
      className="col-sm-12 col-md-6 col-lg-3 my-3"
      style={{ marginTop: "20px" }}
    >
      <div className="card p-3">
        <Link
          to={`/eats/stores/${restaurant._id}/menus`}
          className="btn btn-block"
        >
          <img
            className="card-img-top mx-auto"
            src={restaurant.images[0].url}
            alt={restaurant.name}
          ></img>
        </Link>

        <div className="card-body d-flex flex-column">
          <h4 className="card-title">{restaurant.name}</h4>
          {/* <p className="rest_tags"> {restaurant.tags}</p> */}
          <p className="rest_address">{restaurant.address}</p>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(restaurant.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({restaurant.numOfReviews} Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
