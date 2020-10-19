import React, { useState, useEffect } from "react";

const UserList = () => {
    useEffect(() => {
        fetchUsers();
    }, []);

    const [users, setUsers] = useState();

    const fetchUsers = async () => {
        try {
            const data = await fetch("/api/data");
            const users = await data.json();
            setUsers(users.data);
        } catch (err) {
            console.log(err);
        }
    };

    let userList = users.map((user) => {
        return <li>{user}</li>;
    });

    return (
        <div>
            <ul>{userList}</ul>
        </div>
    );
};

export default UserList;
