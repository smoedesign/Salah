import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Header from "../components/Header";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ErrorMessages from "../components/ErrorMessages";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  messages: Yup.string().required().label("Message"),
});

function FeedbackScreens(props) {
  return (
    <View style={styles.container}>
      <Header title={"feedback"} />
      <Formik
        style={styles.form}
        initialValues={{ email: "", userName: "", messages: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              placeholder="Name"
              onChangeText={handleChange("userName")}
            />
            <ErrorMessages error={errors.userName} />
            <AppTextInput
              placeholder="Email"
              keyboardType={"email-address"}
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
            />
            <ErrorMessages error={errors.email} />

            <AppTextInput
              placeholder="Message"
              multiline
              onChangeText={handleChange("messages")}
            />
            <ErrorMessages error={errors.messages} />

            <AppButton
              title={"Send"}
              onPress={handleSubmit}
              style={styles.button}
              color={colors.white}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 25,
    width: "100%",
    backgroundColor: colors.primary,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});
export default FeedbackScreens;
