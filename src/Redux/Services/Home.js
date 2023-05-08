import axios from "axios";
import {
    getCount,
    getCountFailure, getCountSuccess
} from "../Action/Home";


export const getProjects =
    (objBody = {}) =>
        async (dispatch) => {
            // dispatch(loading(true));
            console.log("mjj11111jj");
            try {
                const response = await axios.get(
                    "https://restcountries.com/v2/all",
                );
                console.log("rrrrrrr",response.data)
                return dispatch(getCountSuccess(response.data));
            } catch (err) {
                dispatch(getCountFailure(err));
            } finally {
                // dispatch(loading(false));
            }
        };