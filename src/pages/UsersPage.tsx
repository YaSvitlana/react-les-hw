import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {Outlet} from "react-router";

export const UsersPage = () => {
    return (
        <div style={{display: 'flex'}}>
            <UsersComponent/>
            <div style={{marginLeft: '20px'}}>
            <Outlet/>
            </div>
        </div>
    );
};