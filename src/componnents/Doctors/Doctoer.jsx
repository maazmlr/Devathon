import React, { useEffect, useState } from "react";
import DocCard from "./DocCard";
import Buttons from "./butonns";
import axios from "axios";
import BasicSelect from "./butonns";
import { NavLink, useSearchParams } from 'react-router-dom';
import { TextField } from "@mui/material";


export const Doctoer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/doctors").then((res) => setData(res.data));
  }, []);
  console.log(data)
  const [searchParams, setSearchParams] = useSearchParams();
  let typeFileter=searchParams.get('type')?.toLocaleLowerCase();

  const display=typeFileter ? data.filter(value=>value.category.toLowerCase()===typeFileter):data;
  console.log(display)


  const elements = display.map((value) => (
   <NavLink to={` ${value._id}`}> <DocCard
      key={value._id}
      name={value.name}
      category={value.category}
      rating={value.rating}
      totalRating={value.ratingCount}
      timing={value.timing}
      days={value.days.toString()}
      img={value.img_url}
      id={value._id}
    />
    </NavLink>
  ));
    let category=(new Set(data.map(value=>value.category)))
    category=[...category]
  return (
    <>
      <div className="button-container ">
        <BasicSelect element={category}/>
      </div>
      <div
        style={{
          display: "flex",
          flexGrow: "revert",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        
      >
           {elements}
      </div>
   
    </>
  );
};
