import React from "react";
import Link from "next/link";

//internal import
import style from "./help.module.css";

const Help = () => {
  const help = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
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
