import apiClient from "./client";

const endpoint =
  '/production?query=*[_type=="hisnAlmuslim"]|order(indexid asc){...,alazkar[]->|order(indexid asc) }';

const getAzkar = () => apiClient.get(endpoint);

export default {
  getAzkar,
};
