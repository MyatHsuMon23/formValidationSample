import React from "react";
import styles from "./LoginForm.module.scss";
import { Form, Formik, FormikProps, useFormikContext } from "formik";
import CustomInput from "../CustomInput/CustomInput";

type LoginFormProps = {
	submit: (values: any, actions: any) => void;
	schema: any;
	EmailonChange?: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
	submit,
	schema,
	EmailonChange,
}) => {
	
	return (
		<div className={styles.formBody}>
			<div className={styles.titleHolder}>
				<h1 className={styles.title}>Login</h1>
			</div>
			<Formik
				initialValues={{
					email: "",
					password: "",
				}}
				validationSchema={schema}
				onSubmit={submit}
			>
				{({ values, isValid, dirty }: FormikProps<any>) => (
					<Form className={styles.wrapper}>
						<CustomInput
							name="email"
							placeholder="For eg. example@gmail.com"
							type="text"
							customClass={styles.input_wrapper}
							label="Email Address"
						/>
						<CustomInput
							name="password"
							type="password"
							label="Password"
							customClass={styles.input_wrapper}
						/>

						{/* <div className={styles.link}>
								Forgot password?
						</div> */}
						<button
							className={styles.login_btn}
							disabled={!values.email || !values.password || !isValid || !dirty}
							type="submit"
						>
							LOGIN
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginForm;