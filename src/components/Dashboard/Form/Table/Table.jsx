import React, { useState } from "react";
import profileImage from "../../../../assets/dashboard/profile.webp";
import Select from "../Select/Select";
import Icon from "../../../Buttons/Icon";

const Table = ({
  title,
  tableHead,
  data,
  isview,
  isedit,
  isdelete,
  isviewOption,
  isEditOption,
  isDeleteOption,
  perPage,
}) => {
  // Pagination
  const itemsPerPage = perPage ? perPage : 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Range of items 1-5 of 10
  const rangeStart = (currentPage - 1) * itemsPerPage + 1;
  const rangeEnd = Math.min(currentPage * itemsPerPage, data.length);

  return (
    <div>
      <div className="    px-4 flex justify-between items-center py-6 bg-white">
        <div>
          <h1 className="text-[20px] font-semibold">{title}</h1>
        </div>
        <div>
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
          {currentItems.map((user) => {
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
                            {/* <i className="fa-solid fa-chart-line"></i> */}
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
                        isEditOption(user);
                      }}
                      className="  text-blackGray text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  )}
                  {isview && (
                    <button
                      onClick={() => {
                        isviewOption({ isOpen: true, data: user });
                      }}
                      className="   text-black text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i className="fa-solid fa-eye"></i>
                    </button>
                  )}

                  {isdelete && (
                    <button
                      onClick={() => {
                        isDeleteOption(user);
                      }}
                      className="  text-main text-[20px]  h-[30px] w-[30px] px-6 rounded  mx-auto text-center"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center px-4 py-6">
        {rangeStart}-{rangeEnd} of {data.length}
        <div>
          {currentPage > 1 && (
            <button
              className="px-4"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <Icon IconName="fa-solid fa-arrow-left" color="main" size="xl" />
            </button>
          )}
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`px-4 text-lg ${
                currentPage === index + 1 ? "text-red" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              className="px-4"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <Icon IconName="fa-solid fa-arrow-right" color="main" size="xl" />
            </button>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Table;
