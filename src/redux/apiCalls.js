import { publicReq } from "../reqMethods";
import { loginFailuer, loginStart, loginSuccess, logOut } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicReq.post('/auth/login', { ...user });
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailuer());
    }
}

export const logout = (dispatch) => {
    try {
        dispatch(logOut());
    } catch (err) {
        console.log(err);
    }
}