import { create } from "apisauce";
import { Settings } from "react-native";
import settings from "../config/settings";
const apiClient = create({
  baseURL: settings.baseURL,
});

export default apiClient;
