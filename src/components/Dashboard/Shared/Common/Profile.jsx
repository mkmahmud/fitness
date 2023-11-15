import { getUserInfo } from "../../../../service/storeUserInfo";
import profileImage from "../../../../assets/dashboard/profile.webp";
import PageHead from "./PageHead";
import {
  useCurrentUserQuery,
  useGetUserDetailsQuery,
} from "../../../../redux/api/user/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../redux/features/user/userSlice";

const Profile = () => {
  // user data
  const user = getUserInfo();

  // User information
  const { data, error, isLoading } = useCurrentUserQuery(user?.id);

  // User Details Information
  const { data: userDetails } = useGetUserDetailsQuery(user?.id);

  // Dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(data?.user));
  }, [data]);

  return (
    <div>
      {!isLoading && (
        <div>
          <PageHead
            title={`Wellcome Back, ${data?.user?.fullName} `}
          ></PageHead>
          <div className="bg-white text-black px-4 py-6 flex items-center">
            <div className="w-10/12">
              <h2>Basic information</h2>
              <div>
                <div className="text-[20px] flex my-4">
                  <p className="w-[100px] font-semibold">ID</p>
                  <span>: {data?.user?.id}</span>
                </div>
                <div className="text-[20px] flex my-4">
                  <p className="w-[100px] font-semibold">Name</p>
                  <span>: {data?.user?.fullName} </span>
                </div>
                <div className="text-[20px] flex my-4">
                  <p className="w-[100px] font-semibold">Email</p>
                  <span>: {data?.user?.email}</span>
                </div>
              </div>
              <div>
                <h2 className="text-red text-[20px] font-semibold">
                  Sunday, 10 April
                </h2>
              </div>
            </div>
            <div className="w-[2/12]">
              <img
                src={
                  userDetails?.user?.profilePhoto
                    ? userDetails?.user?.profilePhoto
                    : profileImage
                }
                className="h-[200px] w-[200px]"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
