import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { ContactContextProvider } from "../context/contact-context";

import ContactTable from "../components/contact-tables";
import ContactForm from "../components/contact-form";

export default function ContactView() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}
