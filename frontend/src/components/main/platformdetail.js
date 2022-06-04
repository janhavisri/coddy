import { Avatar, Rating, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";
import { Formik } from "formik";
 import Swal from "sweetalert2";

const PPTViewer = () => {
  const [pptLink, setPptLink] = useState(
    "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx"
  );

  const navigate = useNavigate();

  const { id } = useParams();
  const [platformData, setPlatformData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ReviewFile, setReviewFile] = useState("");
  const [reviewList, setReviewList] = useState([]);
  const [hero, setHero] = useState("");
  const [dataList, setDataList] = useState([]);
  const [reviewLoading, setReviewLoading] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [orgText, setOrgText] = useState("");
  const url = app_config.api_url;
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [ratingText, setRatingText] = useState("");

  const fetchData = () => {
    fetch(url + "platform/getbyid/" + id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setPlatformData(data);
          fetchRatings(data._id);
          setLoading(false);
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const reviewform={
    websitename:"",
    description:"",
  };
  const formSubmit = (values) => {
    console.log(values);
    values.heroimage = hero;
    values.file = ReviewFile;

    const reqOp = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch(url + "review/add", reqOp)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.message == "success") {
        Swal.fire({
          icon: "success",
          title: "Added Successfully!!",
        });
      }
    });
};

  const fetchRatings = (platform_id) => {
    fetch(url + "platform/getbyitem/" + platform_id).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setReviewList(data);
          setReviewLoading(false);
        });
      }
    });
  };

  const addRating = () => {
    fetch(url + "platform/add", {
      method: "POST",
      body: JSON.stringify({
        rating: 4,
        text: reviewText,
        user: currentUser._id,
        slide: platformData._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Review💬 Added");
      }
    });
  };

  const displayRatings = () => {
    if (!reviewLoading) {
      return reviewList.map(({ rating, text, user }) => (
        <div className="card">
          <div className="card-body">
            <Avatar alt="User" />
            <span>{/* <b>{user.name}</b> */}</span>
            <Rating name="simple-controlled" value={rating} />
            <h5 className="text-dark">{text}</h5>
          </div>
        </div>
      ));
    }
  };
  const disData=()=>{
    if (!loading) {
      return dataList.map(
        ({
          websitename,
          description,
          _id,
        }) => (<div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
        <div class='container contd' id='container'>
    <div class='card-wrapper'>
      <div class='arrow' id='previous'><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
      <div class='arrow' id='next'><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
      <div class='main-window' id='main-window'>
  <h2>{websitename}</h2>
        <p class="small">
                      <a href="#!" class="text-muted">
                        {description}
                      </a>
                    </p>
  
        </div>
          
        <Button onClick={e=>navigate("/main/review/" )} variant="contained">Click For Full Details</Button>
        return <div style={{ background: "#eee" }}>
      {/* <img class="banner" src="https://events.mygov.in/sites/all/themes/mygov/images/inner-banner.jpg"></img> */}
      <div className="container">
          <div className="row disdata">{disData()}</div>
        </div>
      </div>
        </div>
      </div>
      </div> 
        // </div>
        // </div>
        // </div>
        // </div>
    
          )
        );
      }
    };

  const displayData = () => {
    if (!loading) {
      return <div className="container" style={{ padding: "4rem" }}>
            <div className="card">
              <div className="card-body">
                <h2>{platformData.title}</h2>
                <p class="small">
                    <h6 class="text-muted">
                      {platformData.category}
                    </h6>
                  </p>
                  <p>{platformData.description}</p>

                <div className="ripple">
                   <img
                  src={url + platformData.heroimage}
                  class="card-img-top"
                  alt="Laptop"
                />
                </div>
{/* <h4 >{platformData.plans}</h4> */}
<div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>{platformData.plans}</p>
      {/* <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> */}
    </blockquote>
  </div>
  <div class="review">
               <h4 className="text-muted">Review</h4>
                <hr />
                <Rating name="simple-controlled" value={4} />
                <Formik initialValues={reviewform} onSubmit={formSubmit}>
                 {({ values, handleChange, handleSubmit }) => (
                   <form onSubmit={handleSubmit}>
                <TextField
                  label="Write Something .."
                  fullWidth
                  className="mt-2"
                  multiline
                  rows={3}
                  value={orgText}
                  onChange={(e) => setOrgText(e.target.value)}
                />
                <button
                  className="btn btn-primary mt-1 float-end "
                  // onClick={addRating}
                  onClick={e=>navigate("/main/review/" )} 
                >
                  Submit Review
                </button>
                </form>
                 )}
                 </Formik>
              </div>
              </div>
            </div>
          </div>
    }
  }

    return <div style={{ background: "#eee" }}>{displayData()}</div>;
};

export default PPTViewer;