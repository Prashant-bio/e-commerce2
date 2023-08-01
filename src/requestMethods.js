import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTczYzc1NWQ1OTBkODlhNjdlOWQ2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjU1ODYyOSwiZXhwIjoxNjcyODE3ODI5fQ.Q3A8Grb1fHLNxzbolgpOaq9cJo60bmtm_0cbYAX_bbQ"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
});