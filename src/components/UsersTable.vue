<script setup lang="ts">
import users from "../../public/usuarios.json";
import { decryptPassword } from "../lib/utils";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Listagem de Usuários</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nome do usuário</TableHead>
          <TableHead>Senha</TableHead>
          <TableHead>Senha Desencriptada</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="user in users" :key="user.password">
          <TableCell class="font-medium">
            {{ user.username }}
          </TableCell>
          <TableCell>
            {{ decryptPassword(user.password) }}
          </TableCell>
          <TableCell>
            {{ user.password }}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
