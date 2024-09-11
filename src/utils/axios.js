/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import Axios from "axios";

const token = localStorage.getItem("token");

const axios = Axios.create({
    baseURL: "https://backend-ox4t.onrender.com",
    headers: {
        "x-access-token": token,
    },
});

export default axios;
