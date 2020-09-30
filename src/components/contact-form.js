import React from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { ContactContex } from "../context/contact-context";

export default function ContactForm() {
  const name = useFormInput("");
  const email = useFormInput("");

  console.log(name);
  // akses ke context
  let { state, dispatch } = React.useContext(ContactContex);

  const onSubmit = () => {
    // dispatch({
    //   type: "START",
    // });

    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value },
    });

    // dispatch({
    //   type: "COMPLETE",
    // });
    // reset form
    name.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths={3}>
          <Form.Field width={6}>
            <Input placeholder="enter name" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="enter email" {...email} required />
          </Form.Field>

          <Form.Field width={6}>
            <Button fluid primary disabled={state.loading}>
              New contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };
  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
}
