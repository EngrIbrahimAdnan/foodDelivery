import instance from ".";

const getRestaurentList = async () => {
  const response = await instance.get("/resturant");
  return response.data;
};

export { getRestaurentList };
