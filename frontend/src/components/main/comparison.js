import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/comparison.css";
const Comparison = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState([]);

  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "platform/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const compareCard = ({
    title,
    description,
    plans,
    offers,
    category,
    heroimage,
    links,
    _id,
  }) => {
    return (
        
      <div key={_id}className="col-md">
        <div className="card">
          <div className="card-body">
            
            <h1>{title}</h1>  
            {category}         
            <p>{description}</p>
            <img
                  src={url + heroimage}
                  class="card-img-top"
                  alt="Laptop"
                />
            <div class="card">
  <div class="card-header">
    Plans
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{plans}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
</div>
<div class="card" >
  <div class="card-header">
    Offers
    <p>{offers}</p>
  </div>
  {/* <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul> */}
</div>
          </div>
        </div>
      </div>
    );
  };
  const applyfilter = () => {};

  const showOptions = () => {
    if (!loading) {
      return (
          <div>
        <select className="form-control">
          <option>Select One</option>
          <option value="weebly">Weebly</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
        </select>
           <div className="row">{showOptions()}</div>
           </div>
      );
    }
  };

  const showCompareCards = () => {
    if (!loading) {
      return (
        <div className="row">
          {datalist.slice(0, 3).map((data) => compareCard(data))}
        </div>
      );
    }
  };

  return <div>{showCompareCards()}</div>;
};

const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default Comparison;
