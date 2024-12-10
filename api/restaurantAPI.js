import instance from ".";

const getRestaurentList = async () => {
  const response = await instance.get("/resturant");
  return response.data;
};

const getRestaurentbyID = async (id) => {
  const response = await instance.get(`/resturant/${id}`);
  console.log("RESPONSE");
  console.log(response.data);
  return response.data;
};

const getDishbyID = async (id) => {
  const response = await instance.get(`/item/${id}`);

  return response.data;
};

export { getRestaurentList, getRestaurentbyID, getDishbyID };
