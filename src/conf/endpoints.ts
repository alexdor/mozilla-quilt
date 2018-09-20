import { develop } from '../helpers/helpers';

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
  apiBaseUrl: "https://api-quilt.swaco.io",
  endpoints
};

if (develop) {
  conf = {
    apiBaseUrl: "http://localhost:3000/api/",
    endpoints
  };
}
