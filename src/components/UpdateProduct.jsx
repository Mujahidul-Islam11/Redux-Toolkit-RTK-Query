import React from "react";
import { useUpdateProductMutation } from "../redux/services/dummyData";

const UpdateProduct = () => {
  const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        id: 2,  
        title: "Hello", 
      };
  
      const response = await updateProduct(updatedProductData);
  
      if ('error' in response) {
        console.error("Update failed:", response.error);
      }
    } catch (error) {
      console.log("oops! something went wrong", error);
    }
  };
  

  return (
    <div>
      {error ? <div>Oops! Something went wrong.</div> : null}
      {isLoading ? <div>Loading...</div> : null}
      
      {data && (
        <>
          <h3>{data.id}</h3>
          <h3>{data.title}</h3>
          <img src={data.thumbnail} alt={data.title} />
        </>
      )}

      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
