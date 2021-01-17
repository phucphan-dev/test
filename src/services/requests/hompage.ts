import axiosInstance from "services/common/instance";

const getBanner = async () => {
  const res = await axiosInstance.post("/example");
  return res.data;
};
export default getBanner;
