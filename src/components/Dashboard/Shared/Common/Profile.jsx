import { getUserInfo } from "../../../../service/storeUserInfo";
import profileImage from "../../../../assets/dashboard/profile.webp";
import PageHead from "./PageHead";

const Profile = () => {
  // user data
  const user = getUserInfo();

  return (
    <div>
      <PageHead title={`Wellcome Back, ${user?.id} `}></PageHead>
      <div className="bg-white text-black px-4 py-6 flex items-center">
        <div className="w-10/12">
            <h2>Basic information</h2>
          <div>
            <div className="text-[20px] flex my-4">
              <p className="w-[100px] font-semibold">ID</p>
              <span>: T-0001</span>
            </div>
            <div className="text-[20px] flex my-4">
              <p className="w-[100px] font-semibold">Name</p>
              <span>: Mahmudul Hasn </span>
            </div>
            <div className="text-[20px] flex my-4">
              <p className="w-[100px] font-semibold">Email</p>
              <span>: email@gmail.com</span>
            </div>
          </div>
          <div>
            <h2 className="text-red text-[20px] font-semibold">Sunday, 10 April</h2>
          </div>
        </div>
        <div className="w-[2/12]">
          <img src={profileImage} className="h-[200px] w-[200px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
