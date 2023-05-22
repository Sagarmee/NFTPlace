import React from "react";

//internal import
const Title = ({ heading, paragraph }) => {
  return (
    <>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
    </>
  );
};

export default Title;
