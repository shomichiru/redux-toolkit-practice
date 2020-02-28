import axios from "axios";
import { getPageList } from "../modules/pageListsSlice";

export const getPageListAsync = () => dispatch => {
  try {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then(res => {
      dispatch(getPageList(res.data));
    });
  } catch (err) {
    console.error(err);
  }
};
