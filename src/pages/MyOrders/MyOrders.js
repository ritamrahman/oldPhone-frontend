import React from "react";

const MyOrders = () => {
  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
  };

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">My Orders</h2>
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
                <th className="p-3">MyOrders</th>
                <th className="p-3">title</th>
                <th className="p-3">price</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {new Array(12).fill().map(() => (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <>
                    <td className="p-3">q</td>
                    <td className="p-3">q</td>
                    <td className="p-3">23</td>
                    <td>
                      <button className="mx-2" onClick={() => handelDelete()}>
                        Pay Now
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

export default MyOrders;
