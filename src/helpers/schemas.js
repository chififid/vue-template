import { string } from "yup";

const fieldSchema = string().required();

const usernameSchema = fieldSchema.label("Your Username");
const passwordSchema = fieldSchema.min(8).label("Your Password");
const emailSchema = fieldSchema.email().label("Email Address");

export { usernameSchema, passwordSchema, emailSchema };
