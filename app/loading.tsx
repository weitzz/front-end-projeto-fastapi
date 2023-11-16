"use client";
import { useState, CSSProperties } from "react";
import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  let [loading, setLoading] = useState(true);
  return (
    <div className="flex items-center justify-center h-screen">
      <BarLoader loading={loading} color="#16a34a" width={100} height={5} />
    </div>
  );
};

export default Loading;
