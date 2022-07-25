import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function DeleteRentalHouse() {
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  });
  let fetchData = async () => {
    const Result = await axios.delete(
      `http://localhost:3000/rental-houses/${id}`
    );
    console.log("Delete successfully");
  };
  return <div>DeleteRentalHouse</div>;
}

export default DeleteRentalHouse;
