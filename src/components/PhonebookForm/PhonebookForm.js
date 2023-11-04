import { Formik } from 'formik';
import * as Yup from 'yup';

import { Form, Field, FormGroup } from './PhonebookForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.number().required('Required'),
});

export const PhonebookForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" />
          </FormGroup>

          <FormGroup>
            Number
            <Field name="number" />
          </FormGroup>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
