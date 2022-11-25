import React, { useContext, useEffect, useState } from "react";

const AllSeller = () => {
  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
  };

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">All Seller</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-700">
              <tr className="text-left text-secondary bg-secondaryBG">
                <th className="p-3">name</th>
                <th className="p-3">email</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {new Array(12).fill().map(() => (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <>
                    <td className="p-3">q</td>
                    <td className="p-3">q</td>
                    <td>
                      <button className="mx-2">Verify</button>
                    </td>
                    <td>
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

export default AllSeller;
