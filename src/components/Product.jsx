import { useGetProductByIdQuery } from "../redux/services/dummyData";

const Product = () => {
  const { error, isLoading, data } = useGetProductByIdQuery(2);

  return (
    <div>
      {error ? (
        <> Oops! something went wrong</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        <img src={data?.thumbnail} alt="" />
        <h3>{data?.title}</h3>
        </>
      ) : null}
    </div>
  );
};

export default Product;
