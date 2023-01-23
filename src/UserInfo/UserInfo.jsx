import React from "react";

function UserInfo(props) {
    return (
    <>
        <h1>{props.users?.firstName} {props.users?.lastName}</h1>
        <p>Date of Birth: {props.users?.birthDate}</p>
        <p>Email: {props.users?.email}</p>
    </>
  );
}

export default UserInfo;
