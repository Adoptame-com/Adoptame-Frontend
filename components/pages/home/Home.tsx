"use client";
import {
  Field,
  Form,
  Formik,
  withFormik,
  FormikProps,
  FormikErrors,
} from "formik";
import Button from "../../ui/Buttons/Button";

const Home = () => {
  const handleText = () => {
    console.log("hola");
  };

  const handleForm = (values, action) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col gap-10 w-full p-3">
      <Button onClick={handleText} padding="py-4 px-5">
        Hola
      </Button>
      <Formik
        initialValues={{
          email: "",
          nombre: "",
        }}
        onSubmit={(values, actions) => {
          handleForm(values, actions);
        }}
      >
        <Form>
          <div className="flex flex-col gap-3">
            <Field
              label="label"
              name="email"
              className="py-4 px-5 rounded-2xl border-[2px] border-[#D2D2D2]"
            />
            <Field
              label="nombre"
              name="nombre"
              className="py-4 px-5 rounded-2xl border-[2px] border-[#D2D2D2]"
            />
            <Field name="color" as="select" className="py-4 px-5 rounded-2xl border-[2px] border-[#D2D2D2]">
              <option className="bg-red-400 p-10" value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </Field>
            <Button onClick={handleText} padding="py-4 px-5">
              Hola
            </Button>{" "}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
