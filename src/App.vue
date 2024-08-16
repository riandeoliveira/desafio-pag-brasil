<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import UserForm from "./components/UserForm.vue";
import UsersTable from "./components/UsersTable.vue";
import { Toaster } from "./components/ui/toast";
import { useUserStore } from "./stores/use-user-store";

const userStore = useUserStore();
</script>

<template>
  <div class="flex justify-center h-screen items-center">
    <div class="w-[800px] flex flex-col gap-20">
      <Header />
      <main class="flex flex-col gap-12">
        <UserForm />
        <UsersTable v-if="userStore.isValidUser" />
      </main>
      <Footer />
    </div>
  </div>
  <Toaster />
</template>
