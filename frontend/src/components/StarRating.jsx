import { Box, CheckboxGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { ax } from "../utils/constants";

function StarRating({ size, isReadOnly = false }) {
  const [rating, setRating] = useState(0);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { data, error, loading } = useFetch(`/rating/?categoryId=${id}`);
  useEffect(() => {
    setRating(data?.rating);
  }, [loading]);

  const createRating = async (newRating) => {
    setIsLoading(true);
    try {
      const res = await ax.post("/rating/", {
        rating: newRating,
        categoryId: id,
      });
      setRating(newRating);
    } catch (error) {
      console.log(error.response?.data);
    }
    setIsLoading(false);
  };
  return (
    <Box fontSize={size}>
      <Rating
        rating={rating}
        readonly={isReadOnly || isLoading || loading}
        initialRating={rating}
        emptySymbol={<FaStar color="#bbb" />}
        fullSymbol={<FaStar color="#ffc107" />}
        onChange={createRating}
        emptyColor="#bbb"
        fullColor="#ffc107"
      />
    </Box>
  );
}

export default StarRating;
