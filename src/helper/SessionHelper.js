class SessionHelper {
  // ---------- Token ----------
  setToken(token) {
    localStorage.setItem("token", token);
  }

  getToken() {
    return localStorage.getItem("token");
  }

  removeToken() {
    localStorage.removeItem("token");
  }

  // ---------- User ----------
  setUserDetails(userDetails) {
    localStorage.setItem("user", JSON.stringify(userDetails));
  }

  getUserDetails() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }

  removeUserDetails() {
    localStorage.removeItem("user");
  }
}

const sessionHelper = new SessionHelper();
export default sessionHelper;
