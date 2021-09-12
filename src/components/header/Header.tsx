import React from "react";
import { useHistory } from "react-router";
import "./Header.css"

export interface Props {
  onDeleteItems: () => void
}

export const Header: React.FC<Props> = ({ onDeleteItems }) => {
  const history = useHistory();


  return (
    <div className="header">
      <strong className="sub-title">Be Active</strong>
      <h1>Barnsley Brew Coffee</h1>
      <p>
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds
        of berries from certain Coffea species. When coffee berries turn from.
      </p>
      <h2>Top Packs</h2>
      <button onClick={() => history.push("/create-item")}>Create New</button>
      <button onClick={() => onDeleteItems()}>Delete</button>
    </div>
  );
};
