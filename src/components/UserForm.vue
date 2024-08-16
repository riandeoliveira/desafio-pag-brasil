<script setup lang="ts">
import { useForm } from "vee-validate";
import users from "../../public/usuarios.json";
import { decryptPassword } from "../lib/utils";
import { userFormSchema } from "../schemas/user-form-schema";
import { useUserStore } from "../stores/use-user-store";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/toast";

type UserForm = {
  username: string;
  password: string;
};

const { toast } = useToast();

const userStore = useUserStore();

const { defineField, errors, handleSubmit } = useForm({
  validationSchema: userFormSchema,
});

const [username, usernameAttrs] = defineField("username");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  const formValues = values as UserForm;

  users.forEach((user) => {
    const decryptedPassword = decryptPassword(user.password);

    const isValidUsername = formValues.username === user.username;
    const isValidPassword = formValues.password === decryptedPassword;

    if (isValidUsername && isValidPassword) {
      userStore.setIsValidUser(true);
    } else {
      userStore.setIsValidUser(false);

      alert(
        "Erro ao buscar usuários! O nome de usuário e/ou senha não existem."
      );

      // toast({
      //   variant: "destructive",
      //   title: "Erro ao buscar usuários!",
      //   description: "O nome de usuário e/ou senha não existem.",
      // });
    }
  });
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <h2 class="text-2xl font-semibold mb-4">Formulário</h2>
    <div class="flex gap-12 items-end">
      <div class="flex-1">
        <label for="username" class="font-semibold">Nome do usuário:</label>
        <Input
          type="text"
          v-model="username"
          v-bind="usernameAttrs"
          class="mt-2"
        />
        <span class="text-red-500 text-xs font-semibold">{{
          errors.username
        }}</span>
      </div>
      <div class="flex-1">
        <label for="password" class="font-semibold">Senha:</label>
        <Input
          type="password"
          v-model="password"
          v-bind="passwordAttrs"
          class="mt-2"
        />
        <span class="text-red-500 text-xs font-semibold">{{
          errors.password
        }}</span>
      </div>
    </div>
    <Button type="submit" class="mt-8 w-full">Enviar</Button>
  </form>
</template>
