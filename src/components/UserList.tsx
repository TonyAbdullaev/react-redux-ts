import React, {useEffect} from "react";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypeSelector(state => state.user)
    const {fetchUsers} = useAction()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            {
                users.map(user =>
                    <div key={user.name}>{user.name}</div>
                )
            }
        </div>
    );
};

export default UserList;