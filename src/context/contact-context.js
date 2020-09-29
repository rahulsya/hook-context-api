import React from "react";

export const ContactContex = React.createContext();

const initialState = {
  contacts: [
    {
      id: "098",
      name: "Diana Prince",
      email: "diana@us.army.mil",
    },
    {
      id: "099",
      name: "Bruce Wayne",
      email: "bruce@batmail.com",
    },
    {
      id: "100",
      name: "Clark Kent",
      email: "clark@metropolitan.com",
    },
  ],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state, action.payload],
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return { loading: true };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <ContactContex.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContex.Provider>
  );
};
