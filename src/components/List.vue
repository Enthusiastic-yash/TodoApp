<script setup>
import { RouterLink } from "vue-router";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure you want to delete")) return;
  console.log("delete", id);
};
</script>
<template>
  <div
    class="bg-indigo-500 h-10 grid grid-cols-9 text-white text-2xl text-center font-bold"
  >
    Student
  </div>

  <table class="w-full table-auto">
    <thead>
      <tr class="bg-gray-300">
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="w-full">
        <td class="py-3">1</td>
        <td class="py-3">yash</td>
        <td class="py-3">yash@gmail.com</td>
        <td class="py-3 flex justify-center">
          <RouterLink :to="{ name: 'view', params: { id: 1 } }">
            <EyeIcon
              class="h-6 w-6 text-blue-400 mx-4 cursor-pointer hover:text-blue-500"
            />
          </RouterLink>
          <RouterLink :to="{ name: 'Edit', params: { id: 1 } }">
            <PencilIcon
              class="h-6 w-6 text-green-400 mx-4 cursor-pointer hover:text-green-500"
            />
          </RouterLink>

          <TrashIcon
            @click="deleteStudent(1)"
            class="h-6 w-6 text-red-400 mx-4 cursor-pointer hover:text-red-500"
          />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="w-full sticky bottom-10 text-end">
    <RouterLink :to="{ name: 'Add' }">
      <button
        class="bg-violet-600 hover:bg-violet-500 outline-none text-white rounded-full p-4 sticky right-5"
      >
        <UserPlusIcon class="w-8 h-8" />
      </button>
    </RouterLink>
  </div>
</template>
