import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://185.38.37.19/echoapi/",
    headers: {
        "Content-Type": "application/json"
    }
})