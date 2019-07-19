import {
  GET_DETAILS,
  SET_LOADING,
  ADD_DETAIL,
  DELETE_DETAIL,
  DETAILS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_DETAIL,
  CLEAR_ALL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case ADD_DETAIL:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        loading: false,
        current: action.payload
      };
    case UPDATE_DETAIL:
        return {
            ...state,
            contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload: contact)
        }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    case DELETE_DETAIL:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case CLEAR_ALL: 
     return {
         ...state,
         current: null,
         loading: false
     }
    case DETAILS_ERROR:
      return {
        ...state
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
