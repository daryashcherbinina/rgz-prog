import React, { useEffect } from "react";
import M from "materialize-css";
import {API} from '../config'

const Ingredient = ({ ingredient ,  measures }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  
  return (
    <div className="col s4 m3 l2 center-align">
      <img
        className="materialboxed responsive-img"
        src={`${API.Image}/${ingredient}.png`}
        alt={ingredient}
      />
      <p>
        <span>{measures}</span>
      </p>
      <p>
        <span>{ingredient}</span>
      </p>
    </div>
  );
};

export default Ingredient;