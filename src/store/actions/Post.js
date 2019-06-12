import Backend from "../../config/backend/Backend";
import { LOAD_POSTS } from "./Types";

export const loadPosts = () => async (dispatch) => {
	const response = await Backend.get("/posts");
	dispatch({ type: LOAD_POSTS, payload: response });
};