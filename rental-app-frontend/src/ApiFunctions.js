import {IP} from "../constants/IP";
import axios from "axios";

const instance = axios.create();

export async function makeRemoteRequest(url, method, token = "", data = null) {
    return instance({
        method: method,
        url: url,
        data: data,
        headers: {
            Authorization: "Bearer " + token
        }
    });
}


export async function getRequest(path, token) {
    return makeRemoteRequest(IP + path, "GET", token);
}

export async function postRequest(path, body, token = "") {
    return makeRemoteRequest(IP + path, "POST", token, body);
}

export async function putRequest(path, body, token = "") {
    return makeRemoteRequest(IP + path, "PUT", token, body);
}

export async function deleteRequest(path, token) {
    return makeRemoteRequest(IP + path, "DELETE", token);
}
