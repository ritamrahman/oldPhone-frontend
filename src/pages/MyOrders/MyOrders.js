import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../../components/Loading/Loading";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState();

  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [user.email]);

  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
  };
  console.log("orders", orders);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {orders?.products.length === 0 ? (
            "No Orders Found"
          ) : (
            <>
              <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">My Orders</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <colgroup>
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                      <tr className="text-left text-secondary bg-secondaryBG">
                        <th className="p-3">MyOrders</th>
                        <th className="p-3">price</th>
                        <th className="p-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders?.products?.map((item) => (
                        <tr className="border-b border-opacity-20 ">
                          <>
                            <td className="p-3">{item?.productName}</td>
                            <td className="p-3">{item?.price}</td>
                            <td>
                              <button className="btn btn-xs mx-2  bg-baseSecondary" onClick={() => handelDelete()}>
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
          )}
        </>
      )}
    </>
  );
};

export default MyOrders;
