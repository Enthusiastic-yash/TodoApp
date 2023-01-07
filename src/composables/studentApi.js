import { ref } from "vue";
import axios from "axios";

export default function useStudent() {
  const url = "http://localhost:3333/students/";
  const studentAllData = ref([]);
  const err = ref(null);
  const statusCode = ref(null);
  const delError = ref(null);
  //Get all student data

  const getAllStudentFun = async () => {
    studentAllData.value = [];
    err.value = null;
    try {
      const res = await axios.get(url);
      studentAllData.value = res.data;
    } catch (error) {
      err.value = error.message; //   console.log(err);
    }
  };

  //GEt single student data

  const singleStudentDataFun = async (id) => {
    studentAllData.value = [];
    err.value = null;
    try {
      const singleStudent = await axios.get(url + id);
      studentAllData.value = singleStudent.data;
    } catch (error) {
      err.value = error.message;
    }
  };

  //Post student data
  const createStudent = async (formData) => {
    try {
      const config = {
        method: "POST",
        url: url,
        headers: {
          "content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };
      const res = await axios(config);
      studentAllData.value = res.data;
      statusCode.value = res.status;
    } catch (error) {
      err.value = error.message;
    }
  };

  //Update student data

  const updateStudentData = async (id, data) => {
    studentAllData.value = [];
    err.value = null;
    try {
      const config = {
        method: "PUT",
        url: url + id,
        headers: {
          "content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };
      const res = await axios(config);
      studentAllData.value = res.data;
      statusCode.value = res.status;
    } catch (error) {
      err.value = error.message;
    }
  };

  //Delete studeny
  const deleteStudentData = async (id) => {
    studentAllData.value = [];
    err.value = null;
    try {
      const config = {
        method: "DELETE",
        url: url + id,
        headers: {
          "content-Type": "application/json",
        },
      };
      const res = await axios(config);
      studentAllData.value = res.data;
      statusCode.value = res.status;
    } catch (error) {
      delError.value = error.message;
    }
  };

  return {
    getAllStudentFun,
    studentAllData,
    err,
    singleStudentDataFun,
    createStudent,
    updateStudentData,
    deleteStudentData,
    statusCode,
    delError,
  };
}
