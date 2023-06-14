import React from "react";
import Link from "next/link";

//internal import
import style from "./help.module.css";

const Help = () => {
  const help = [
    {
      name: "About",
      url: "About",
    },
    {
      name: "Contact Us",
      url: "Contact",
    },
    {
      name: "Sign Up",
      url: "Signup",
    },
    {
      name: "Login",
      url: "Login",
    },
    {
      name: "Subscription",
      url: "Subscription",
    },
  ];
  return (
    <div>
      {help.map((item, i) => (
        <div key={i + 1} className={style.help}>
          <Link href={{ pathname: `${item.url}` }}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Help;
