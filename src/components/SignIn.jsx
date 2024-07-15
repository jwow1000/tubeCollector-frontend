import { useState } from 'react';
import { useNavigate, useActionData, Form, useOutletContext} from 'react-router-dom';
import { signIn } from '../services/users.js';

async function action({ request }) {
  // get global user stuff
  // // set form data
  // const [loginForm, setLoginForm] = useState({
  //   username: "",
  //   password: "",
  //   isError: false,
  //   errorMsg: "",
  // });
  // get the formData
  const formData = await request.formData();
  console.log( "form data signin", formData)
  const username = formData.get("email");
  const password = formData.get("password");
  const errors = {};

  // validate the fields
  if (typeof username !== "string") {
    errors.username = "That doesn't look like a username";
  }

  if (typeof password !== "string" || password.length < 1) {
    errors.password = "Password must be > 1 characters";
  }

  // return data if we have errors
  if (Object.keys(errors).length) {
    return errors;
  }

  // otherwise create the user and redirect
  try {
    const logObj = {
      'username': username,
      'password': password,
      "isError": false,
      "errorMsg": ""
    }
    const userData = await signIn( logObj ); 
    return userData;
  } catch (error) {
    // return errors
    console.error(error);
    return error;
  }
  
}


function SignIn() {
  const actionData = useActionData();
  console.log( 'action Data sign in', actionData);
  const [user, setUser] = useOutletContext();
  const navigate = useNavigate();
  
  if(actionData) {
    setUser(actionData);
    navigate("/");
  }

  console.log('action data: ', actionData);

  
  return (
    <Form method="post">
      <p>
        <input 
          type="text" 
          name="email" 
          required
          autoComplete='off'
        />
      </p>

      <p>
        <input 
          type="password"
          name="password"
          required
          autoComplete="off"
        />
      </p>

      <p>
        <button type="submit">Sign up</button>
      </p>
    </Form>
  )
}

SignIn.action = action;

export default SignIn