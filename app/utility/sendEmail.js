import { Alert } from "react-native";
import { sendGridEmail } from "react-native-sendgrid";

// Your SendGrid API key
const apiKey =
  "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";

// Function to send email using SendGrid
const to = "hello@smoedesign.com";
const from = "hello@smoedesign.com";
const subject = "New Message from salah App";
export const sendEmail = async (emailParams) => {
  const msg = `email: ${emailParams.email}\nname: ${emailParams.userName}\ntext: ${emailParams.messages}`;

  try {
    const response = await sendGridEmail(apiKey, to, from, subject, msg);
    if(response == true)
    Alert.alert('لقد تم الارسال بنجاح')
   
  } catch (error) {
    Alert.alert('هنالك مشكلة الرجاء المحاولة مرة أخري')
  }
};
