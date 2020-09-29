import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { ContactContextProvider } from "../context/contact-context";

export default function ContactView() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
      </Segment>
    </ContactContextProvider>
  );
}
