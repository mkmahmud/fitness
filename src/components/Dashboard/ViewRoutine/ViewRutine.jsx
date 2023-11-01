import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRoutineModal } from "../../../redux/features/modals/modalSlie";

const ViewRoutine = () => {
  // Get Routine details
  const data = useSelector((state) => state.modal.routine);
  // Set Modal Status
  const dispatch = useDispatch();

  return (
    <div>
      {data?.data?.open && (
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
            <div className="my-4">
              <div>
                <div className="flex justify-between">
                  <div>
                    <h2 className=" text-lg font-semibold">
                      Routine Name:{" "}
                      <span> {data?.data?.data?.routineName}</span>
                    </h2>
                    <h2 className=" text-lg font-medium">
                      Routine Duration:{" "}
                      <span> {data?.data?.data?.duration}</span>
                    </h2>
                  </div>
                </div>

                <table class="my-4 border border-gray w-full">
                  <thead>
                    <tr>
                      <th class="border border-gray">SL</th>
                      <th class="border border-gray">Name</th>
                      <th class="border border-gray">Set</th>
                      <th class="border border-gray">Rep</th>
                    </tr>
                  </thead>
                  {}
                  <tbody>
                    {data?.data?.data?.routines.map((routine, index) => (
                      <tr key={routine._id}>
                        <td class="border border-gray px-2">{index + 1}</td>
                        <td class="border border-gray px-2">{routine.title}</td>
                        <td class="border border-gray px-2">{routine.set}</td>
                        <td class="border border-gray px-2">{routine.rep}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewRoutine;
