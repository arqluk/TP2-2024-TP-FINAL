import nodeMailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from ".env";

const PORT = process.env.PORTDEV || 8081;
const STRC = process.env.STRCDEV;
const NAMEBASE = process.env.NAMEBASEDEV;
const PERSISTENCE = process.env.PERSISTENCEDEV || "";
const TRANSPORTER = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export default {
  PORT,
  STRC,
  NAMEBASE,
  PERSISTENCE,
  TRANSPORTER,
};
