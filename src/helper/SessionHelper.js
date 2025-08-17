class SessionHelper {
  setToken(token) { localStorage.setItem("token", token); }
  getToken() { return localStorage.getItem("token"); }
  removeToken() { localStorage.removeItem("token"); }

  setUserDetails(user) { localStorage.setItem("user", JSON.stringify(user)); }
  getUserDetails() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  }
  removeUserDetails() { localStorage.removeItem("user"); }
}

const sessionHelper = new SessionHelper();
export default sessionHelper;
