import axios from "axios";

export const streamServiceClient = axios.create({
  baseURL: "./",
})