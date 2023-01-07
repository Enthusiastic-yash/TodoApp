<script setup>
import { RouterLink } from "vue-router";
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import useStudent from "../composables/studentApi";
import { onMounted } from "vue";

const {
  getAllStudentFun,
  studentAllData,
  err,
  deleteStudentData,
  statusCode,
  delError,
} = useStudent();

onMounted(getAllStudentFun);

const deleteStudent = async (id) => {
  if (!window.confirm("Are you sure you want to delete")) return;
  await deleteStudentData(id);
  await getAllStudentFun();
};
</script>
<template>
  <div
    class="bg-indigo-500 h-10 grid grid-cols-9 text-white text-2xl text-center font-bold"
  >
    Student
  </div>
  <div
    v-if="err"
    class="bg-red-200 text-red-400 p-2 font-medium text-sm"
    role="alert"
  >
    !Oops Error encountered: {{ err }}
  </div>
  <div v-if="!err">
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
        <tr
          class="w-full"
          v-for="({ id, studentName, studentEmail }, i) in studentAllData"
          :key="id"
        >
          <td class="py-3">{{ ++i }}</td>
          <td class="py-3">{{ studentName }}</td>
          <td class="py-3">{{ studentEmail }}</td>
          <td class="py-3 flex justify-center">
            <RouterLink :to="{ name: 'view', params: { id: id } }">
              <EyeIcon
                class="h-6 w-6 text-blue-400 mx-4 cursor-pointer hover:text-blue-500"
              />
            </RouterLink>
            <RouterLink :to="{ name: 'Edit', params: { id: id } }">
              <PencilIcon
                class="h-6 w-6 text-green-400 mx-4 cursor-pointer hover:text-green-500"
              />
            </RouterLink>

            <TrashIcon
              @click="deleteStudent(id)"
              class="h-6 w-6 text-red-400 mx-4 cursor-pointer hover:text-red-500"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      v-if="statusCode === 200"
      class="bg-red-200 text-red-400 p-2 font-medium text-sm"
      role="alert"
    >
      Deleted Successfully
    </div>

    <div
      v-if="delError"
      class="bg-red-200 text-red-400 p-2 font-medium text-sm"
      role="alert"
    >
      Unable to Delete : {{ delError }}
    </div>
  </div>

  <span class="w-full sticky bottom-28 left-full text-end bg-orange-400">
    <RouterLink :to="{ name: 'Add' }">
      <button
        class="bg-violet-600 hover:bg-violet-500 outline-none text-white rounded-full p-4 right-5 absolute"
      >
        <UserPlusIcon class="w-8 h-8" />
      </button>
    </RouterLink>
  </span>
</template>
