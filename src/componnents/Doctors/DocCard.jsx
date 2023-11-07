import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReactStars from "react-stars";

export default function DocCard() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <p className="title">Muhammad Maaaz</p>
          <p>Cardiologist </p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            value={4}
            size={24}
            color2={"#ffd700"}
          />{" "}
          <span>(120)</span>
        </div>
        <div className="flip-card-back">
          <p className="title"><WatchLaterIcon/>:12:30pm-2:30pm</p>
          <p><CalendarMonthIcon/>:[tue,wed,thu]</p>
        </div>
      </div>
    </div>
  );
}
