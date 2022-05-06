import { searchUser } from "./usersReducer";

const userSearch = (user) => async(dispatch) => {
    const URL = `https://cherry-crumble-58684.herokuapp.com/api/users/${user.id}`

    const response = await fetch(URL);
    const obj = await response.json();
    
    dispatch(searchUser(obj));
}

export default userSearch;