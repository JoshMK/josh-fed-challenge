//React core
import React from "react";
//SCSS
import "./blog-grid-item.scss";

//renderDistanceIcon - output a distance icon and value if the blog item has them
function renderDistanceIcon(dist) {
  if (dist !== "") {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="10"
          viewBox="0 0 11 10"
        >
          <g>
            <g>
              <path
                fill="#2e3134"
                d="M6.989 0c1.136 0 2.222.472 2.98 1.296a3.876 3.876 0 0 1-.297 5.552l-2.486 2.19a4.046 4.046 0 0 1-2.675 1.002 4.052 4.052 0 0 1-2.98-1.295 3.872 3.872 0 0 1 .294-5.549l2.486-2.192A4.046 4.046 0 0 1 6.989 0zm3.506 4.1A3.356 3.356 0 0 0 9.6 1.633 3.552 3.552 0 0 0 6.99.498c-.87 0-1.704.313-2.348.882L2.155 3.57A3.375 3.375 0 0 0 1.9 8.402a3.555 3.555 0 0 0 2.61 1.134 3.55 3.55 0 0 0 2.347-.879L9.34 6.469a3.372 3.372 0 0 0 1.154-2.37zM7.526 6.873L6.378 7.887a2.826 2.826 0 0 1-1.87.703c-.701 0-1.372-.255-1.89-.719l-.104-.094.433-.382.083.074c.406.357.931.554 1.477.554a2.23 2.23 0 0 0 1.478-.556L7.137 6.45zm.212-3.599a.96.96 0 0 1-.074 1.376L5.18 6.838a1.017 1.017 0 0 1-.672.253c-.285 0-.558-.118-.748-.325a.96.96 0 0 1 .073-1.375l2.484-2.188c.185-.163.424-.253.672-.253.286 0 .559.119.748.325zm-.405 1a.459.459 0 0 0 .037-.661.513.513 0 0 0-.38-.163.518.518 0 0 0-.342.128L4.166 5.766a.46.46 0 0 0-.036.662.51.51 0 0 0 .379.163.51.51 0 0 0 .342-.128z"
              />
            </g>
          </g>
        </svg>
        <span>
          <span className="app__sr-only">Time:</span>
          {dist}
        </span>
      </>
    );
  }
}

//renderClockIcon - output a time icon and value if the blog item has them
function renderClockIcon(time) {
  if (time > 0) {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
        >
          <g>
            <g>
              <path
                fill="#2e3134"
                d="M4.75 3h.5v3h-.5zM3.5 0h3v.5h-3zM5 10A4.505 4.505 0 0 1 .5 5.5C.5 3.019 2.519 1 5 1a4.48 4.48 0 0 1 2.905 1.07l.716-.717.354.354-.708.708A4.479 4.479 0 0 1 9.5 5.5C9.5 7.981 7.481 10 5 10zm0-8.5c-2.205 0-4 1.794-4 4 0 2.205 1.794 4 4 4 2.205 0 4-1.794 4-4 0-2.205-1.794-4-4-4z"
              />
            </g>
          </g>
        </svg>
        <span>
          <span className="app__sr-only">Distance:</span>
          {time}
        </span>
      </>
    );
  }
}

//renderDetailsLink - output a clickable link if the blog item has one
function renderDetailsLink(link) {
  if (link !== "") {
    return (
      <a className="app__blog-grid-item-link" href="">
        View details
      </a>
    );
  }
}

function BlogGridItem(props) {
  const logoImg = props.img ? props.img : "";
  return (
    <div className="app__blog-grid-item">
      <img
        className="app__blog-grid-item-image"
        src={require(`../../assets/images/blog-grid-item-images/${logoImg}`)}
        alt=""
      />
      <div className="app__blog-grid-item-content">
        <p className="app__blog-grid-item-text">{props["text-en"]}</p>
        {/* conditionally show clock icon */}
        {renderClockIcon(props.time)}
        {/* conditionally show distance icon */}
        {renderDistanceIcon(props.dist)}
        {/* conditionally show details link */}
        {renderDetailsLink(props.detailsLink)}
      </div>
    </div>
  );
}

export default BlogGridItem;
