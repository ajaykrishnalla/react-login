import React, { useContext, useEffect } from "react";
import DetailsContext from "../context/details/detailsContext";
import DetailItem from "./DetailItem";
const Details = () => {
  const detailsContext = useContext(DetailsContext);
  const { getDetails, contacts, loading } = detailsContext;
  useEffect(() => {
    getDetails();
    //eslint-disable-next-line
  }, []);

  if (contacts === null || contacts.length === 0) {
    return <h4>No Details to Display</h4>;
  }
  return (
    <div>
      <h1>All Details</h1>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>E-Mail</th>
            <th>Phone</th>
            <th>Prefered Contact Type</th>
            <th colSpan="6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {!loading && contacts !== null
            ? contacts.map(contact => (
                <DetailItem key={contact.id} contact={contact} />
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default Details;
