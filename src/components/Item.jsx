import React from "react";

const Item = ({ author, image, title, url, isEnabled, addToList, description = null }) => (
  <article className="theme-item">
    <h3>{title}</h3>

    <img src={image} alt={`Screenshot of ${title}`} />

    <h4>by {author}</h4>

    {description && <div className="description">{description}</div>}

    <a href={url}>Thread link</a>

    <button onClick={() => addToList()} className={isEnabled ? "btn btn-enabled" : "btn"}>
      {isEnabled ? "Added 👌" : "Add"}
    </button>
  </article>
);

export default Item;
