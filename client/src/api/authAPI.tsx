import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Read error response if available
      throw new Error(`Login failed: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Login error:', error);
    throw new Error('Network error or server is unreachable');
  }
}

export { login };

