import React, { memo, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import ListItem from "../components/ListItems";
import ShareImage from "../components/ShareImage";
import { FlashList } from "@shopify/flash-list";
import useDatabase from "../hooks/useDatabase";

function NamesOfAllah() {
  const { data: names, request } = useDatabase();

  useEffect(() => {
    request("namesOfAllah");
  }, []);

  return (
    <FlashList
      keyExtractor={(item) => item._id}
      data={names}
      renderItem={({ item }) => (
        <View>
          <ListItem
            descriptin={item.name}
            refrence={item.description}
            fonts={{ fontSize: 18 }}
            headers={styles.header}
          />
          <View style={styles.separator}>
            <ShareImage
              descriptin={item.name}
              refrence={item.description}
              shareComponent="مشاركة"
              font={{
                fontSize: 18,
                alignItems: "center",
                textAlign: "center",
              }}
              header={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            />
          </View>
        </View>
      )}
      ListFooterComponent={() => <View style={{ marginBottom: 200 }}></View>}
      estimatedItemSize={200}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  separator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
  },
});
export default memo(NamesOfAllah);
