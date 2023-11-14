"use client"
import { useState, CSSProperties } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const override: CSSProperties = {
  display: "flex",
  margin: "10% auto",
  width: "100px",
  borderColor: "#0284C7",
};


const Loading = () => {
  let [loading, setLoading] = useState(true);
  return (
    <ClimbingBoxLoader
      loading={loading}
      cssOverride={override}
      size={60}
      color="#0284C7"
    />
  )
}

export default Loading