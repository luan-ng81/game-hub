import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aa438ec19a584cfc9172fc1d2d20970c",
  },
});
