import { api } from '.';

export const signup = async (name, email, password) => {
  try {
    const { data } = await api.post('/auth/signup', {
      name: name,
      email: email,
      password: password,
    });
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    console.log(data)
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
