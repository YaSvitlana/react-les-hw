import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";


export const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(value => value.json())
            .then(({users}: IUserResponseModel) => {
                setUsers(users);
        });
    }, []);

    return (
        <div>
            {
                users.map((user:IUser) => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};