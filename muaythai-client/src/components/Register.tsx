import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { addUser, getTokenDetails } from "../services/userService";
import { successMsg } from "../services/feedbacksServices";

interface RegisterProps {
    setUserInfo: Function;
}

const Register: FunctionComponent<RegisterProps> = ({ setUserInfo }) => {
    let navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            password: "",
            age: "",
            isAdmin: false
        },
        validationSchema: yup.object({
            firstName: yup.string().required().min(1),
            lastName: yup.string().required().min(1),
            phone: yup.string().required().min(10),
            email: yup.string().required().email(),
            password: yup.string().required().min(8),
            age: yup.string().required().min(1),
            isAdmin: yup.boolean(),
        }),
        onSubmit(values) {
            addUser({ ...values, isAdmin: false })
                .then((res) => {
                    navigate("/home");
                    sessionStorage.setItem("token", JSON.stringify({ token: res.data }))
                    sessionStorage.setItem(
                        "userInfo",
                        JSON.stringify({
                            email: (getTokenDetails() as any).email,
                            isAdmin: (getTokenDetails() as any).isAdmin,
                            userId: (getTokenDetails() as any).userId,
                        })
                    );
                    setUserInfo(JSON.parse(sessionStorage.getItem("userInfo") as string));
                    successMsg(`${values.email} wes registered and logged in`);
                })
                .catch((err) => console.log(err));
        },
    });
    return (
        <>
            <div className="container col-md-10">
                <form onSubmit={formik.handleSubmit}>
                    <h3 className="display-3">REGISTER</h3>
                    <div className="row">
                        <div className="container col-md-5">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="John"
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">First Name</label>
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <small className="text-danger">{formik.errors.firstName}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Doe"
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Last Name</label>
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <small className="text-danger">{formik.errors.lastName}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    placeholder="20"
                                    name="age"
                                    value={formik.values.age}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Age</label>
                                {formik.touched.age && formik.errors.age && (
                                    <small className="text-danger">{formik.errors.age}</small>
                                )}
                            </div>
                        </div>
                        <div className="container col-md-5">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder=""
                                    name="phone"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="firstName">Phone</label>
                                {formik.touched.phone && formik.errors.phone && (
                                    <small className="text-danger">{formik.errors.phone}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingEmail"
                                    placeholder="name@example.com"
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingInput">Email address</label>
                                {formik.touched.email && formik.errors.email && (
                                    <small className="text-danger">{formik.errors.email}</small>
                                )}
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                                {formik.touched.password && formik.errors.password && (
                                    <small className="text-danger">{formik.errors.password}</small>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary my-3 w-100"
                        disabled={!formik.isValid || !formik.dirty}
                    >
                        Register
                    </button>
                </form>
                <Link to="/">Already have user? Login here</Link>
            </div>
        </>
    );
};

export default Register;