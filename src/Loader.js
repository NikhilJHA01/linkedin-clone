import * as React from "react";
import "./Loader.css";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div className="loader">
      <CircularProgress />
    </div>
  );
}
