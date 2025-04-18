const API_URL = "http://161.35.153.209:5430/api";

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  const response = await fetch(`${API_URL}/registration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.username, 
      email: userData.email,
      phone_number: "1234567890", 
      password: userData.password,
      user_city: "TestCity", 
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Registration error: ${data?.message || "Unknown error"}`);
  }

  return data;
};


export const loginUser = async (loginData: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  const data = await response.json(); 
  console.log("Server response on login:", data);

  if (!response.ok) {
    throw new Error(`Authorization error: ${data?.message || "Unknown error"}`);
  }

  return data; 
};

