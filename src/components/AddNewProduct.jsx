import React from "react";
import { useAddNewProductMutation } from "../redux/services/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  {
    error ? <>Oops!</> : isLoading && <>Loading...</>;
  }

  const handleAddProduct = async (e) => {
    try {
      const newProduct = {
        id: 1,
        title: "Cake khayega?",
        thumbnail: "kichu nai",
      };

      await addNewProduct(newProduct);
    } catch (error) {
      console.log("oops! something went wrong", error);
    }
  };

  return (
    <div>
      <h3>{data?.id}</h3>
      <h3>{data?.title}</h3>
      <img src={data?.thumbnail} alt={data?.title} />

      <button onClick={() => handleAddProduct()} disabled={isLoading}>
        Add Product
      </button>
    </div>
  );
};

export default AddNewProduct;
