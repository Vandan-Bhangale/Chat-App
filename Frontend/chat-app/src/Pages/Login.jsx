import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

function Login() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
      >
        {() => (
          <Form className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-lg space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Login to your account
            </h2>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
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
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-700"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
