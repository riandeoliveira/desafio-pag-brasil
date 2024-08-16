import * as yup from "yup";

export const userFormSchema = yup.object({
  username: yup.string().trim().required("Campo obrigatório."),

  password: yup.string().trim().required("Campo obrigatório."),
});
