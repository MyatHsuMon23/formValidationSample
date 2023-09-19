import './App.css';
import './style/_style.scss'
import * as yup from "yup";
import LoginForm from './components/Login/LoginForm';

type LoginProps = {};

//validation schema
const schema = (config: any) => {
	return yup.object().shape({
		email: yup
			.string()
			.email("Please enter a valid email address")
			.required("Email is required"),
    password: yup.string().required("Password is required"),
		...config,
	});
};

const App: React.FC<LoginProps> = () => {

	const postLogin = async (values: any, actions: any) => {
		actions.setSubmitting(false);
    // call Login api...
	};

  return (
    <div className="App">
      <LoginForm
					submit={postLogin}
					schema={schema}
				/>
    </div>
  );
}

export default App;
