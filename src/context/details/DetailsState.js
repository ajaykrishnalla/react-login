import React, { useReducer } from "react";
import DetailsContext from "./detailsContext";
import DetailsReducer from "./detailsReducer";
import axios from "axios";
import uuid from "uuid";
import {
  GET_DETAILS,
  DETAILS_ERROR,
  SET_LOADING,
  ADD_DETAIL,
  DELETE_DETAIL,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_ALL,
  UPDATE_DETAIL
} from "../types";

const DetailsState = props => {
  const intialState = {
    contacts: null,
    loading: false,
    current: null
  };
  const [state, dispatch] = useReducer(DetailsReducer, intialState);

  //Get Details

  const getDetails = async () => {
    try {
      setLoading();
      const res = await axios.get("/details");
      const data = await res.data;
      dispatch({
        type: GET_DETAILS,
        payload: data
      });
    } catch (err) {
      dispatch({
        type: DETAILS_ERROR,
        payload: err.statusText
      });
      console.error(err);
    }
  };
  const addDetail = async contact => {
    setLoading();
    contact.id = uuid.v4();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      await axios.post("/details", contact, config);
      dispatch({
        type: ADD_DETAIL,
        payload: contact
      });
    } catch (err) {
      dispatch({
        type: DETAILS_ERROR,
        payload: err.statusText
      });
      console.error(err);
    }
  };
  
  const setCurrent = contact => {
    dispatch({
      type: SET_CURRENT,
      payload: contact
    })
  }

  const updateDetail = async contact => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      await axios.put(`details/${contact.id}`,contact,config);
      dispatch({
        type: UPDATE_DETAIL,
        payload: contact
      })
    } catch (err) {
      console.error(err);
      dispatch({
        type: DETAILS_ERROR,
        payload: err.statusText
      })
    }
  }
  const deleteDetail = async id => {
    try {
      await axios.delete(`/details/${id}`);
      dispatch({
        type: DELETE_DETAIL,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: DETAILS_ERROR
      });
    }
  };
  const setLoading = () => {
    dispatch({
      type: SET_LOADING
    });
  };
  const clearCurrent = () => {
    dispatch({
      type: CLEAR_CURRENT
    })
  }
  const clearAll = () => {
    dispatch({
      type: CLEAR_ALL
    })
  }
   return (
    <DetailsContext.Provider
      value={{
        contacts: state.contacts,
        loading: state.loading,
        current: state.current,
        getDetails,
        addDetail,
        deleteDetail,
        setCurrent,
        clearCurrent,
        updateDetail,
        clearAll
      }}
    >
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsState;
