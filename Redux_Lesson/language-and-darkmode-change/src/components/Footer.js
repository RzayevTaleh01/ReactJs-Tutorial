import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../stores/SiteSlice";

const Footer = () => {
  const { dark, language } = useSelector((state) => state.site);
  const languages = ["az", "eng"];

  const dispatch = useDispatch();

  return (
    <div>
      Change Language <br />
      <div>
        {languages.map((button, index) => (
          <button
            onClick={() => dispatch(setLanguage(button))}
            className={button === language ? "active" : ""}
            key={index}
          >
            {button}
          </button>
        ))}
      </div>

      Change Site Theme

      <div>
        <button onClick={()=>dispatch(setDarkMode())}>
            {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Footer;
