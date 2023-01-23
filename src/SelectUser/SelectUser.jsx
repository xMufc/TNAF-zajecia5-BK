import React from "react";

function SelectUser(props) {
    const users = props.users;
    const userList = users?.map((user) => 
        <option value={user.id} key={user.id}>{user.firstName} {user.lastName}</option>
    );
    return (
    <>
        <select name="users" onChange={props.selectedUser}>
            <option value={0}>Select user</option>
            {userList}
        </select>
    </>
  );
}

export default SelectUser;
