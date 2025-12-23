import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
  gender: Yup.string().required("Please select your gender"),
});

function Signup() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "",
        }}
        validationSchema={SignupSchema}
      >
        {() => (
          <Form className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create Account
            </h2>

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your name"
                className="px-4 py-2 border rounded-lg bg-white text-gray-800
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-lg bg-white text-gray-800
                     focus:outline-none  focus:bg-white focus:ring-2 focus:ring-yellow-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="px-4 py-2 border rounded-lg bg-white text-gray-800
                     focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Gender
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="male"
                    className="accent-yellow-400"
                  />
                  <span className="text-gray-700">Male</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="female"
                    className="accent-yellow-400"
                  />
                  <span className="text-gray-700">Female</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <Field
                    type="radio"
                    name="gender"
                    value="other"
                    className="accent-yellow-400"
                  />
                  <span className="text-gray-700">Other</span>
                </label>
              </div>

              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500
                   text-white font-semibold py-2 rounded-lg
                   transition duration-200"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Signup;
