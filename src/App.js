import React, { useEffect, useState } from "react"
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

import {AppContext} from "./context";
import { getTheme, setTheme } from "./helpers/theme";
const App = () => {
  const [message, addMessage] = useState(null); // создаем состояние
const [theme, toggleTheme] = useState(getTheme()); //создаем состояние для смены темы

// объявляем хук useEffect который будет вызываться когда меняется тема
// с помощью функции setTheme мы сохраняем текущую тему в localStorage и
//добавляет класс dark или light тегу body в зависимости от переданного значения

useEffect( ()=> {
  setTheme(theme)
},[theme])

  return (
    // передаем состояние theme и функцию для смены состояния toggleTheme в контекст AppContex
    <AppContext.Provider
    value = {{
      theme,
      toggleTheme,
    }}
    >
    <div className="container">
      <Header />
      <Dialog  newMessage={message} />
       {/* передаем функцию addMessage для смены состояния 
       Как только мы отправим сообщение, компонент Sender вызовет эту функцию, передав ему новое сообщение.
       После этого обновится состояние и Dialog получит новое сообщение*/}
      <Sender onAddMessage={addMessage} /> 
    </div>
    </AppContext.Provider>
  );
};

export default App;
