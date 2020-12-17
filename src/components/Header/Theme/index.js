import React, { useContext } from "react";
import { AppContext } from "../../../context";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import "./styles.css";

const Theme = () => {
    //берем тему и функцию для смены темы из контекст с помощью хука useContext
  const { theme, toggleTheme } = useContext(AppContext);

  const onToggleTheme = (event) => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme);
  };

  return (
    <div
      className="theme"
      data-theme={theme === "light" ? "dark" : "light"}
    //   вешаем обработчик onToggleTheme на элемент div, при клике на которого будет меняться тема
      onClick={onToggleTheme}
    >
      {theme === "light" ? (
        <IoIosMoon size={20} className="dark" />
      ) : (
        <IoIosSunny className="yellow" size={20} />
      )}
    </div>
  );
};

export default Theme;