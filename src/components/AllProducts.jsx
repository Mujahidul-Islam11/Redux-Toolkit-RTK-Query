import { useGetAllProductsQuery } from "../redux/services/dummyData";

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log(data)
  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div  style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "25px"}}>
          {
            data?.products?.map(product => (<div>
            <div>
          <img src={product?.thumbnail} alt={product?.title} />
            <h3>{product?.title}</h3>
            </div>
            </div>))
          }
        </div>
      ) : null}
    </>
  );
};

export default AllProducts;
