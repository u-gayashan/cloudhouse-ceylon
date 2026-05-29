import * as Yup from "yup";

export const contactUsSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().min(10, "Min 10 characters").required("Message is required"),
});
