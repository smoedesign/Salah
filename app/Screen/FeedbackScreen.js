import React from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import Header from "../components/Header";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ErrorMessages from "../components/ErrorMessages";
import { sendEmail } from "../utility/sendEmail";

const validationSchema = Yup.object().shape({
  userName: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  messages: Yup.string().required().label("Message"),
});

function FeedbackScreens() {
  return (
    <View style={styles.container}>
      <Formik
        style={styles.form}
        initialValues={{ email: "", userName: "", messages: "" }}
        onSubmit={async (values, { resetForm }) => {
          Keyboard.dismiss();
          const result = await sendEmail(values);
          resetForm();
        }}
        validationSchema={validationSchema}>
        {({
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          setFieldValue,
          values,
        }) => (
          <>
            <AppTextInput
              placeholder="الاسم"
              autoCorrect={false}
              onChangeText={(text) => setFieldValue("userName", text)}
              value={values.userName}
              icon={"account"}
              onBlur={() => setFieldTouched("userName")}
            />
            <ErrorMessages error={errors.userName} visible={touched.userName} />
            <AppTextInput
              placeholder="البريد الالكتروني"
              keyboardType={"email-address"}
              textContentType="emailAddress"
              autoCapitalize="none"
              icon={"email"}
              onChangeText={(text) => setFieldValue("email", text)}
              value={values.email}
            />
            <AppTextInput
              placeholder="الرسالة"
              numberOfLines={15}
              multiline={true}
              onChangeText={(text) => setFieldValue("messages", text)}
              value={values.messages}
              style={{ minHeight: 150 }}
              icon={"message"}
              onBlur={() => setFieldTouched("messages")}
            />
            <ErrorMessages error={errors.messages} visible={touched.messages} />
            <AppButton
              title={"أرسال"}
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
    paddingTop: 20,
    alignItems: "center",
  },
  button: {
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    width: "40%",
    backgroundColor: colors.primary,
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
  },
});
export default FeedbackScreens;
