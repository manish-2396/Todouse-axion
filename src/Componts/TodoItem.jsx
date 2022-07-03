import React from "react";

const TodoItem = ({ name, id, handleDelete }) => {
  // console.log("Item", id);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{border:'1px solid red',
    fontSize:'20px',
    backgroundColor:'red',
    padding:"0px 40px 0px 40px ",
    marginTop:'20px',
    borderRadius:'10px' }} >
        <h1 style={{color:"white"}}>{name}<samp> <button style={{backgroundColor:'green', color:"white"}} onClick={(e) => handleDelete(id, e)}>Delete</button> </samp> </h1>
      </div>
    </div>
  );
};

export default TodoItem;
