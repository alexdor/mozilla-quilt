import { develop } from "../helpers/helpers";

export interface IJobConf {
  type?: string;
  segment?: "GET" | "PUT" | "POST" | "DELETE";
}

// Define endpoints
const endpoints = {
  stories: {
    get: {
      segment: "stories",
      type: "GET"
    },
    post: {
      segment: "stories",
      type: "POST"
    }
  }
};

export let conf = {
  // TODO: ADD THIS
  apiBaseUrl: "https://",
  endpoints
};

if (develop) {
  conf = {
    apiBaseUrl: "http://localhost:4010/api/",
    endpoints
  };
}
