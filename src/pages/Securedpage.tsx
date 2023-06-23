import React from "react";
import PrivateRoute from "../helpers/PrivateRoute";

const Secured = () => {
  return (
    <PrivateRoute>
      <div>
        <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
      </div>
    </PrivateRoute>
  );
};

export default Secured;
