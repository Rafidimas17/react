import React from "react";
import Button from "react-bootstrap/Button";
import "./picked.scss";
function MostPicked(props) {
  return (
    <section className="container">
      <h4 className="most-picked-title">Most Picked</h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> / {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    className="btn"
                    type="link"
                    href={`/properties/${item.id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city},{item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
