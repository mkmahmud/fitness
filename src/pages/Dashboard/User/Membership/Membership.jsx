import React from "react";
import PageHead from "../../../../components/Dashboard/Shared/Common/PageHead";
import { useGetMembershipDetailsQuery } from "../../../../redux/api/userMembership/userMembership";
import { getUserInfo } from "../../../../service/storeUserInfo";

const Membership = () => {
  // Get USer Information
  const user = getUserInfo();
  // Get Membership Details
  const { data } = useGetMembershipDetailsQuery(user?.id);
  console.log(data);

  return (
    <div>
      <PageHead title="Membership"></PageHead>
      {/* My subscriptions */}

      {!data && (
        <div className="p-4 bg-white my-2">
          <h2 className="flex justify-between text-xl text-main font-bold  py-2">
            No Active Membership
          </h2>
        </div>
      )}
      {data && (
        <div className="p-4 bg-white ">
          <h2 className="flex justify-between text-extraLarge font-bold  py-2">
            <span>Monthly Pack ({data?.planId?.planName})</span>{" "}
            <span>USD 30</span>
          </h2>
          <div className="flex text-lg">
            <ul className="mr-4">
              <li className="my-2">Membership Status</li>
              <li className="my-2">Auto Renewals Status</li>
              <li className="my-2">Subscription ID </li>
              <li className="my-2">Start Date </li>
              <li className="my-2">End Date </li>
              <li className="my-2">Amount </li>
            </ul>

            <ul>
              <li className="my-2">
                :
                {data.status ? (
                  <span className="font-bold text-[#008000]"> SUCCEEDED</span>
                ) : (
                  <span className="font-bold text-main">InActive</span>
                )}
              </li>
              <li className="my-2">
                : <span className="font-bold  text-main">OFF</span>
              </li>
              <li className="my-2">
                : <span>{data?.transactionId}</span>
              </li>
              <li className="my-2">
                : <span>{data?.purchaseTime}</span>
              </li>
              <li className="my-2">
                : <span>{data?.endTime}</span>{" "}
              </li>
              <li className="my-2">
                : <span>{data?.totalPrice}</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Membership;
