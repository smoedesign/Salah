import apiClient from "./client";

const endpoint =
  '/production?query=*[_type=="fortyNawawi" ] | order(indexid)';

const getFortyNawaia = () => apiClient.get(endpoint);

export default {
    getFortyNawaia,
};
