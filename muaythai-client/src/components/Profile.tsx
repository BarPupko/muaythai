import { FunctionComponent, useEffect, useState } from "react";
import { getUserDetails } from "../services/userService";
import User from "../interfaces/User";

interface ProfileProps { }

const Profile: FunctionComponent<ProfileProps> = () => {
    let [userInfo, setUserInfo] = useState<User>();
    useEffect(() => {
        getUserDetails()
            .then((res) => {
                setUserInfo(res.data);
            })
            .catch((err) => console.log(err));
    }, []);
    return (
        <><div className="container col-md-3">
            <h3 className="display-3 text-white">Profile</h3>

            <div className="card">
                <div className="card-title">{`${userInfo?.firstName} ${userInfo?.lastName}`}</div>
                <div className="card-body">
                    <div className="card-text">Email: {userInfo?.email}</div>
                    <div className="card-text">Phone Number: {userInfo?.phone}</div>
                    {userInfo?.isAdmin ? <p>This user is an admin</p> : <p>Regular user</p>}
                </div>
            </div>
            <br />
        </div>
        </>
    );
};

export default Profile;