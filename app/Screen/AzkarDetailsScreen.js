import React, { useEffect, memo } from "react";
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import ListItem from "../components/ListItems";
import useDatabase from "../hooks/useDatabase";
import { FlashList } from "@shopify/flash-list";

function AzkarDetailsScreen({ route }) {
  const azkarParam = route.params?.azkar;
  const SearchPram = route.params?.ziker;

  const id = azkarParam ? azkarParam._id : SearchPram.hisAlmuslimId;
  const { data: AzkarData, request } = useDatabase();

  useEffect(() => {
    const conditions = "WHERE hisAlmuslimId = ? ORDER BY indexid";
    const parameters = [id];
    request("alazkar", conditions, parameters);
  }, [id]);

  return (
    <ImageBackground
      source={require("../assets/babyBlue.jpg")}
      style={styles.container}>
      <FlashList
        data={AzkarData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ListItem
            key={item._id}
            descriptin={item.description}
            number={item.count}
            refrence={item.refrance}
            times={item.countnumber}
            headers={{
              paddingVertical: 25,
              fontSize: 20,
              fontWeight: 500,
              textAlign: "center",
            }}
            fonts={{
              textAlign: "center",
              fontSize: 12,
              marginBottom: 13,
              color: "#708090",
              paddingHorizontal: 40,
            }}
          />
        )}
        estimatedItemSize={400}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
    paddingHorizontal: 20,
  },

  Screen: {
    padding: 15,
    marginBottom: 20,
  },
});
export default memo(AzkarDetailsScreen);
