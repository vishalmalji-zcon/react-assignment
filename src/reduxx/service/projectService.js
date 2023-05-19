import axios from "axios"
import { BASE_URL, ProjectAPi } from "../constant/ApiConstant"

export const getProjectsService = async () => {
    return await axios.get(`${BASE_URL}${ProjectAPi.GET_PROJECT}`)
}

export const createProjectService = async (payload) => {
    return await axios.post(`${BASE_URL}${ProjectAPi.ADD_PROJECT}`, payload)
}
export const updateProjectService = async (payload, params) => {
    return await axios.put(`${BASE_URL}${ProjectAPi.UPDATE_PROJECT}`, payload, params)
}
export const deleteProjectService = async (params) => {
    return await axios.delete(`${BASE_URL}${ProjectAPi.DELETE_PROJECT}`, params)
}