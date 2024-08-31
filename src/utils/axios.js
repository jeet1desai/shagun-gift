import axios from "axios";

import { BASE_URL } from "./env";

const axiosServices = axios.create({ baseURL: BASE_URL });

axiosServices.interceptors.response.use((response) => response);

export default axiosServices;
