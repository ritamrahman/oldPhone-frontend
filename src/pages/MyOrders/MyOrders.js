import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider";
import Loading from "../../components/Loading/Loading";

const MyOrders = () => {
  const { user, loading } = useContext(AuthContext);
  // // query
  // const { data: orders, isLoading } = useQuery({
  //   queryKey: ["orders"],
  //   queryFn: async () => {
  //     if (loading) {
  //       return "loading...";
  //     }
  //     const res = await fetch(`${api}/users/${user?.email}`);
  //     const data = await res.json();
  //     return data;
  //   },
  // });

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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
                  {orders?.products?.map((item) => (
                    <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                      <>
                        <td className="p-3">{item?.title}</td>
                        <td className="p-3">{item?.price}</td>
                        <td className="p-3">23</td>
                        <td>
                          <button className="btn xs mx-2" onClick={() => handelDelete()}>
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
  );
};

export default MyOrders;
