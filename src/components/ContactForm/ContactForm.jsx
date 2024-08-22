import { Formik, Form, Field } from "formik";

export default function ContactForm() {
  return (
    <Formik>
      <Form>
        <Field type="text" name="name"></Field>
        <Field type="tel" name="number"></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
