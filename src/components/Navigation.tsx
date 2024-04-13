import { useState } from "react";
import NavItem from "./NavItem";

// const github: string = "https://github.com/iwantegren/stdlivecard-front";

const Navigation = () => {
  const [activeItem, changeActiveItem] = useState(0);
  const items: string[] = ["Main", "Custom", "Active", "In development"];

  return (
    <div className="card text-center container-fluid">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          {items.map((item, index) => (
            <NavItem
              index={index}
              text={item}
              active={activeItem === index}
              itemChanged={changeActiveItem}
            />
          ))}
        </ul>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Navigation;
