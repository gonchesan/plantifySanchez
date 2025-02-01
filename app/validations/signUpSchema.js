import { object, ref, string } from "yup";

export const signUpSchema = object().shape({
  fullname: string().required("Fullname is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required(),
  password: string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  email: string().required("Email is required").email("Not a valid email"),
});
