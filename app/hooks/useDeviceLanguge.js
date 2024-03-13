import { useEffect, useState } from "react";
import * as Localization from "expo-localization";

const useDeviceLanguage = () => {
  const [deviceLanguage, setDeviceLanguage] = useState("");

  useEffect(() => {
    const detectLanguage = async () => {
      const locales = Localization.getLocales();
      const preferredLanguage = locales[0].languageCode;

      // Set the detected language to state
      setDeviceLanguage(preferredLanguage);
    };

    detectLanguage();
  }, []);

  return deviceLanguage;
};

export default useDeviceLanguage;
