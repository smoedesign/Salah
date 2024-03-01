import apiClient from "./client";

const endpoint =
  '/production?query=*[_type == "namesofallah"] | order(indexid)';

const getNamesOfAllah = () => apiClient.get(endpoint);

export default {
  getNamesOfAllah,
};
