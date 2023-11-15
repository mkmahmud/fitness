import toast from "react-hot-toast";
import { useCreateUserMembershipMutation } from "../../redux/api/userMembership/userMembership";
import { getUserInfo } from "../../service/storeUserInfo";

const PlanCard = ({ data }) => {
  // user Information
  const user = getUserInfo();
  // Get Date
  const currentDate = new Date();
  const options = { year: "numeric", month: "short", day: "2-digit" };

  // Format the current date
  const formattedCurrentDate = currentDate.toLocaleDateString(
    undefined,
    options
  );

  // Calculate the date 30 days from the current date
  const futureDate = new Date(currentDate);
  futureDate.setDate(currentDate.getDate() + 30);

  // Format the date 30 days in the future
  const formattedFutureDate = futureDate.toLocaleDateString(undefined, options);

  // Handel Membership
  const [createUserMembership] = useCreateUserMembershipMutation();

  const handelAddPlan = async () => {
    const memberShipData = {
      planId: data._id,
      userid: user.id,
      totalPrice: data.price,
      purchaseTime: formattedCurrentDate,
      endTime: formattedFutureDate,
      transactionId: "32ef3wrwwwrfxwr35ee3y66",
    };

    const res = await createUserMembership(memberShipData);

    if (res.data) {
      toast.success("Membership Added successfully");
    }
  };

  return (
    <div className="border border-gray p-4 mx-auto py-6 my-4  lg:mx-4 min-w-[350px] max-w-[450px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div>
            <h2 className="text-extraLarge">{data?.planName}</h2>
            <span className="text-xl">
              $<span className="font-bold text-main">{data?.price}</span>/month
            </span>
          </div>
          {/* <h2 className="text-center mt-10 font-bold text-main">
            Most Popular
          </h2> */}
        </div>
        <div className="my-6">
          <h2>Features:</h2>
          <ul>
            {data?.plans.map((plan, index) => (
              <li className="my-2" key={index}>
                {" "}
                <i className="fa-solid fa-check mx-2 text-lightGreen"></i>{" "}
                <span>{plan.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <button
          onClick={handelAddPlan}
          className="flex items-center font-roboto text-white bg-main px-6  py-2 font-normal  text-xl"
        >
          Add This Plan{" "}
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
