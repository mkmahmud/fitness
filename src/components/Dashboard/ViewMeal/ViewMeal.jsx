import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMealModal } from "../../../redux/features/modals/modalSlie";
const ViewMeal = () => {
  // Create User Account
  const data = useSelector((state) => state.modal.meal);

  // Set Modal Status
  const dispatch = useDispatch();
  return (
    <div>
      {data?.data?.open && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[800px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setMealModal({ isOpen: false, data: {} }));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="my-4">
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className=" text-lg font-semibold">
                      Meal Name: <span> {data?.data?.data?.mealTitle}</span>
                    </h2>
                    <h2 className=" text-lg font-medium">
                      Meal Duration:{" "}
                      <span> {data?.data?.data?.mealDuration}</span>
                    </h2>
                    <h2 className=" text-lg font-medium">
                      Start Date: <span> {data?.data?.data?.createdAt}</span>
                    </h2>
                  </div>
                 </div>

                <table class="my-4 border border-gray w-full">
                  <thead>
                    <tr>
                      <th class="border border-gray">SL</th>
                      <th class="border border-gray">Name</th>
                      <th class="border border-gray">Time</th>
                      <th class="border border-gray">Meal</th>
                      <th class="border border-gray">After Workout</th>
                    </tr>
                  </thead>
                  {}
                  <tbody>
                    {data?.data?.data?.mealData.map((meal, index) => (
                      <tr key={meal._id}>
                        <td class="border border-gray p-2">{index + 1}</td>
                        <td class="border border-gray p-2">{meal.mealName}</td>
                        <td class="border border-gray p-2">{meal.time}</td>
                        <td class="border border-gray p-2">
                          {meal.meals.map((i) => (
                            <ul key={i.index}>
                              <li className="my-1"> * {i.title}</li>
                            </ul>
                          ))}
                        </td>
                        <td class="border border-gray p-2">
                          {meal.afterMeal.map((i) => (
                            <ul key={i.index}>
                              <li className="my-1"> * {i.title}</li>
                            </ul>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div>
                  <h2 className=" text-lg font-medium">
                    <strong className="text-main">Note: </strong>
                    <span> {data?.data?.data?.note}</span>
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMeal;
