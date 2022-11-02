import "./styles.css";
import React, { useState } from "react";

/**
 * https://stackoverflow.com/questions/67691743/react-handling-nested-objects-as-state-using-hooks
 */

export default function App() {
  const [userInfo, setUserInfo] = useState({
    user: {
      name: "ravi",
      email: "ravi@gmail.com",
      phone: [{ primary: "9999999990" }, { alternate: "9999998880" }]
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
      case "email":
        setUserInfo((userInfo) => ({
          user: {
            ...userInfo.user,
            [name]: value
          }
        }));
        break;

      case "primary":
      case "alternate":
        setUserInfo((userInfo) => ({
          user: {
            ...userInfo.user,
            phone: userInfo.user.phone.map((el) =>
              el.hasOwnProperty(name)
                ? {
                    [name]: value
                  }
                : el
            )
          }
        }));
        break;

      default:
      // ignore
    }
  };

  const {
    name,
    email,
    phone: [{ primary }, { alternate }]
  } = userInfo.user;

  return (
    <div className="App">
      Name: <input name="name" value={name} onChange={handleChange} />
      <br />
      Email: <input name="email" value={email} onChange={handleChange} />
      <br />
      Primary: <input name="primary" value={primary} onChange={handleChange} />
      <br />
      Alternate:{" "}
      <input name="alternate" value={alternate} onChange={handleChange} />
      <br />
    </div>
  );
}
