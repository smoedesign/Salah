import { Alert } from "react-native";
import { sendGridEmail } from "react-native-sendgrid";
import settings from "../config/settings";

// Your SendGrid API key
const apiKey = settings.SENDGRID_API_KEY;

// Function to send email using SendGrid
const to = "hello@smoedesign.com";
const from = "hello@smoedesign.com";
const subject = "New Message from salah App";
export const sendEmail = async (emailParams) => {
  const msg = `email: ${emailParams.email}\nname: ${emailParams.userName}\ntext: ${emailParams.messages}`;

  await sendGridEmail(apiKey, to, from, subject, msg);
};
