import React, { Fragment,useContext } from "react";
import DetailsContext from '../context/details/detailsContext';
const DetailItem = ({ contact }) => {
  const detailsContext = useContext(DetailsContext);
  const {deleteDetail,setCurrent} = detailsContext;
  const { id,name, email, phone, type } = contact;
  const onDel = () => {
    deleteDetail(id);
  } 
 
  return (
    <Fragment>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{type}</td>
        <td colSpan="6">
          <button className="btn btn-sm btn-info" onClick={() => setCurrent(contact)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={onDel}>Delete</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default DetailItem;
