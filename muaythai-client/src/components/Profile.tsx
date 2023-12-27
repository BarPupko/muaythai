import { FunctionComponent, useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";
import User from "../interfaces/User";

interface ProfileProps { }

const Profile: FunctionComponent<ProfileProps> = () => {
    const [userInfo, setUserInfo] = useState<User | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await getUserDetails();
                setUserInfo(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <div className="container col-md-3">
            <h3 className="display-3 text-white text-center">Profile</h3>

            {userInfo ? (
                <div className="card">
                    <div className="card-title text-center">{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                    <div className="card-body">
                        <div className="card-text">Email: {userInfo.email}</div>
                        <div className="card-text">Phone Number: {userInfo.phone}</div>
                        {userInfo.isAdmin ? <p>This user is an admin</p> : <p>Regular user</p>}
                    </div>
                </div>
            ) : (
                <p>Loading user information...</p>
            )}
            <br />
        </div>
    );
};

export default Profile;
