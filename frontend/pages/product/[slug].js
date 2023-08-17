import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "@/lib/query";
import { useRouter } from "next/router";
import {
  DetailStyle,
  ProductInfo,
  Quantity,
  Buy,
} from "@/styles/ProductDetail";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useStateContext } from "@/lib/context";

export default function ProductDetails() {
  //use Stage
  const {quantity, increaseQuantity, decreaseQuantity, onAdd} = useStateContext();

  //Fetch slug
  const { query } = useRouter();
  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  });

  const { data, fetching, error } = results;
  if (fetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>SHITlol...{error.message}</p>;
  }

  const { title, description, image } = data.products.data[0].attributes;
  const { url } = image.data.attributes.formats.medium;
  return (
    <DetailStyle>
      <img src={url} alt="" />
      <ProductInfo>
        <h3>{title}</h3>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQuantity}>
            <AiFillMinusCircle />
          </button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>
            <AiFillPlusCircle />
          </button>
        </Quantity>
        <Buy onClick={() => onAdd(data.products.data[0].attributes, quantity)}>Add to cart</Buy>
      </ProductInfo>
    </DetailStyle>
  );
}
