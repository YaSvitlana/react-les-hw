import { useEffect, useState } from "react";
import { IUser } from "../../models/IUser.ts";
import { getAll } from "../../services/general.api.service.ts";
import { IBaseResponseModel } from "../../models/IBaseResponseModel.ts";
import { UserComponent } from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 30;

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await getAll<IBaseResponseModel & { users: IUser[] }>('/users', { skip: page * limit, limit });
                setUsers(response.users);
                setTotalPages(Math.ceil(response.total / limit));
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [page]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div>
                {users.map((user: IUser) => (
                    <UserComponent key={user.id} user={user} />
                ))}
            </div>

            {}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'left', gap: '10px' }}>
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    disabled={page === 0}
                >
                    prev
                </button>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={page === totalPages - 1}
                >
                    next
                </button>
            </div>
        </div>
    );
};

