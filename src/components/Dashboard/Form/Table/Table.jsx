import React from "react";
import profileImage from "../../../../assets/dashboard/profile.webp";
import Select from "../Select/Select";

const Table = ({
  title,
  tableHead,
  data,
  isview,
  isedit,
  isdelete,
  isviewOption,
  isEditOption
}) => {
  return (
    <div>
      <div className="  rounded-xl px-4 flex justify-between items-center py-6 bg-white">
        <div>
          <h1 className="text-[20px] font-semibold">{title}</h1>
        </div>
        <div>
          <Select></Select>
          <Select></Select>
          <Select></Select>
        </div>
      </div>
      <table className="w-full   text-left mt-6">
        <thead className="border-b border-gray text-gray">
          <tr>
            {tableHead.map((tableHeader) => {
              return (
                <th className="py-2 px-4" key={tableHeader.index}>
                  {tableHeader.title}
                </th>
              );
            })}
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => {
            return (
              <tr key={user.key}>
                {tableHead.map((tableHeader, headerIndex) => {
                  return (
                    <td className="py-2 px-4" key={headerIndex}>
                      {tableHeader.dataIndex === "membership" ? (
                        user[tableHeader.dataIndex] ? (
                          <div className="bg-lightGreen px-2 rounded-full w-[100px] mx-auto text-center">
                            <span>Active</span>
                          </div>
                        ) : (
                          <div className="bg-red text-white px-2 rounded-full w-[100px] mx-auto text-center">
                            {/* <i class="fa-solid fa-chart-line"></i> */}
                            <span>InActive</span>
                          </div>
                        )
                      ) : (
                        user[tableHeader.dataIndex]
                      )}
                    </td>
                  );
                })}

                <td className="py-2 px-4     items-center">
                  {isedit && (
                    <button
                      onClick={() => {
                        isEditOption(user)
                      }}
                      className="  text-blackGray text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  )}
                  {isview && (
                    <button
                      onClick={() => {
                        isviewOption({ isOpen: true, data: user });
                      }}
                      className="   text-black text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                  )}

                  {isdelete && (
                    <button
                      onClick={() => {
                        console.log(user);
                      }}
                      className="  text-red text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-4 py-6">
        <p className="text-gray">1-5 of {data.length}</p>
        <div>
          <button className="px-4">1</button>
          <button className="px-4 text-red">2</button>
          <button className="px-4">3</button>
          <button className="px-4"> {`>`} </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Table;
