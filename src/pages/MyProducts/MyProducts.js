import React, { useContext, useEffect, useState } from "react";

const MyProducts = () => {
  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
  };

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">My Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col className="w-5" />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-700">
              <tr className="text-left text-secondary bg-secondaryBG">
                <th className="p-3">Kitchen Name</th>
                <th className="p-3">Review</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {new Array(12).fill().map(() => (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <>
                    <td className="p-3">q</td>
                    <td className="p-3">q</td>
                    <td className="p-3">q</td>
                    <td className="flex p-3 text-center">
                      <button className="mx-2">sold</button>
                      <button className="mx-2">advertise</button>
                    </td>
                    <td>
                      <button className="mx-2">Edit</button>
                      <button className="mx-2" onClick={() => handelDelete()}>
                        Delete
                      </button>
                    </td>
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
