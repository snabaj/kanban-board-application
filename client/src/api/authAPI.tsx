import { UserLogin, UserSignup } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    });

    const data = await response.json();
   
    if (!response.ok) {
      
      throw new Error(`Login failed`);
    }

    localStorage.setItem('id_token', data.token);
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Network error or server is unreachable');
  }
}

const signup = async (userInfo: UserSignup) => {
  try {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo)
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Signup failed`);
    }

    localStorage.setItem('id_token', data.token);
    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw new Error('Network error or server is unreachable');
  }
}

export { login, signup };

