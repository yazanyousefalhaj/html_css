import React from "react";

export const CoffeeItem = ({ imageSrc, altText, title, highlight = false }) => {
  const highlightClass = highlight ? "highlight lg-visible" : "";
  return (
    <div className={"item " + highlightClass}>
      <img src={imageSrc} alt={altText} />
      <div className="card">
        <h3>{title}</h3>
        <p>
          Coffee is a brewed drink prepared from roasted coffee beans, the seeds
          of berries from certain Coffea species.
        </p>

        {highlight && (
          <div
            className="tags d-flex justify-content-space-between m-auto"
            style={{ width: "80%" }}
          >
            <span>1 Bag</span>
            <span>$69.99</span>
          </div>
        )}
      </div>
    </div>
  );
};
