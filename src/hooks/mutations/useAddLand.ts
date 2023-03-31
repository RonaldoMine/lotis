import { useMutation } from "react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/axios/axios";

const addLand = (datas: any) => {
  return axios.post(BASE_URL + `lands/store`, datas, {
    headers: {
      Authorization:
        "Bearer " +
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvbmFsZG9AZ21haWwuY29tIiwiaWQiOjEsImlhdCI6MTY4MDIxODA2MSwiZXhwIjoxNjgwMzkwODYxfQ.QjHrtTJjZa7eBkYAtIeH__OcRmuYQTTJsEeg2WCfgwE",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const useAddLand = () => {

  return useMutation(addLand);
};
