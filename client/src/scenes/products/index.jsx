import React from "react";
import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import { Box, useMediaQuery } from "@mui/material";
import Loading from "components/Loading";
import Product from "./Product";

export default function Products() {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem ">
      <Header title="PRODUCTS" subtitle="See your list of Products." />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: !isNonMobile && "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => {
              return (
                <Product
                  key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat}
                />
              );
            }
          )}
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
