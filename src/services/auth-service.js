import { apiClient } from "./api-client";

export async function sendDataToSignUp(values) {
  try {
    const options = {
      method: "POST",
      url: "auth/signup",
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function sendDataToSignIn(values) {
  try {
    const options = {
      method: "POST",
      url: "auth/signin",
      data: values,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function forgotPassword(email) {
  try {
    const options = {
      method: "POST",
      url: "auth/forgotPasswords",
      data: email,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyEmail(verify_code) {
  try {
    const options = {
      method: "POST",
      url: "auth/verifyResetCode",
      data: {
        resetCode: verify_code,
      },
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function resetPassword(values) {
  try {
    const options = {
      method: "PUT",
      url: "auth/resetPassword",
      data: values,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateUserData(values) {
  try {
    const options = {
      method: "PUT",
      url: "users/updateMe",
      data: values,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function changePassword(values) {
  try {
    const options = {
      method: "PUT",
      url: "users/changeMyPassword",
      data: values,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyToken() {
  try {
    const options = {
      method: "GET",
      url: "auth/verifyToken",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
