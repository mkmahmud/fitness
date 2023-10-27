import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMealModal } from "../../../redux/features/modals/modalSlie";
const ViewMeal = () => {
  // Create User Account
  const mealData = useSelector((state) => state.modal.meal);
  // Set Modal Status
  const dispatch = useDispatch();

  return (
    <div>
      {mealData?.data?.open && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setMealModal({ isOpen: false, data: {} }));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">Meal 2 </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMeal;
