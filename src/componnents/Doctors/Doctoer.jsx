import React, { useEffect, useState } from "react";
import DocCard from "./DocCard";
import Buttons from "./butonns";
import axios from "axios";
import BasicSelect from "./butonns";
import { useSearchParams } from 'react-router-dom';


export const Doctoer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/doctors").then((res) => setData(res.data));
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('type'))

  const elements = data.map((value) => (
    <DocCard
      key={value._id}
      name={value.name}
      category={value.category}
      rating={value.rating}
      totalRating={value.ratingCount}
      timing={value.timing}
      days={value.days.toString()}
      img={value.img_url}
    />
  ));
    let category=(new Set(data.map(value=>value.category)))
    category=[...category]
  return (
    <>
      <div className="button-container">
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
