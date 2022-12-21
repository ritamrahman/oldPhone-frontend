import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { AuthContext } from "../../contexts/AuthProvider";
// import Loading from "../../components/Loading/Loading";

const AllBuyers = () => {
  const { user, loading } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);
  const [bookings, setBookings] = useState();

  // call review api
  useEffect(() => {
    setIsLoading(true);

    fetch(`${api}/buyers`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch((er) => console.error(er));
  }, [user.email]);

  // handelDelete
  const handelDelete = (id) => {
    console.log("first", id);
  };
  console.log("bookings", bookings);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {bookings?.products?.length === 0 ? (
            "No bookings Found"
          ) : (
            <>
              <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">All buyers</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs">
                    <colgroup>
                      <col />
                      <col />
                      <col className="w-24" />
                    </colgroup>
                    <thead className="dark:bg-gray-700">
                      <tr className="text-left text-secondary bg-secondaryBG">
                        <th className="p-3">name</th>
                        <th className="p-3">email</th>
                        <th className="p-3">isVerified</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bookings?.allUsers?.map((item) => (
                        <tr className="border-b border-opacity-20 ">
                          <>
                            <td className="p-3">{item?.name}</td>
                            <td className="p-3">{item?.email}</td>
                            <td>{item?.isVerified === "true" ? "Varified" : "Not-Varified"}</td>
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

export default AllBuyers;
