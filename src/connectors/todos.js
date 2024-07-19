import { axiosGetRequest } from "@/helpers/connectors";

async function getTodosRequest({ skip, limit }) {
  return await axiosGetRequest("/todos", {
    _start: skip,
    _limit: limit,
  });
}

export { getTodosRequest };
