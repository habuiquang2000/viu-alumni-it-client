import axios from "axios";

const baseURL: string = "https://viu-alumni-it-server.herokuapp.com/";

export default axios.create({
  baseURL: baseURL,
  // baseURL: "http://localhost:5000",
});
