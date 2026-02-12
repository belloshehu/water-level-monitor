import axios from "axios";

const authenticate = async (mode, email, password) => {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=AIzaSyDWIZrgiLMS5hqORbM4rj0xqWss0gWVfK8`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
  return response.idToken;
};

export const createUser = async (email, password) => {
  return await authenticate("signUp", email, password);
};

export const logInUser = async (email, password) => {
  return await authenticate("signInWithPassword", email, password);
};

export const errorMessage = (error) => {
  const { message, code } = error;
  switch (code) {
    case "ERR_BAD_REQUEST":
      return "Incorrect email or password";
    default:
      return "Something went wrong";
  }
};
