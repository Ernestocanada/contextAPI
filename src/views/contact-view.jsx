import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../component/contact-form";
import ContactTable from "../component/contact-table";
import { ContactContextProvider } from "../contextAPI/ContactUseReducer";

export default function Contacts() {
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
