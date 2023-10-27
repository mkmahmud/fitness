import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoutineModal } from "../../../redux/features/modals/modalSlie";

const ViewRoutine = () => {
  // Create User Account
  const routineData = useSelector((state) => state.modal.routine);
  // Set Modal Status
  const dispatch = useDispatch();

  return (
    <div>
      {routineData?.data?.open && (
        <div className="absolute top-0 h-screen bg-[#00000030] w-full  inset-0 flex items-center justify-center ">
          <div className="bg-white w-[600px] p-6 rounded-xl ">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  dispatch(setRoutineModal({ isOpen: false, data: {} }));
                }}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div>
              <h1 className="text-center text-[25px] font-semibold">Routine 1 </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRoutine;
