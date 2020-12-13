import React, { useState } from "react"
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

const App = () => {
  const [message, addMessage] = useState(null); // создаем состояние


  return (
    <div className="container">
      <Header />
      <Dialog  newMessage={message} />
       {/* передаем функцию addMessage для смены состояния 
       Как только мы отправим сообщение, компонент Sender вызовет эту функцию, передав ему новое сообщение.
       После этого обновится состояние и Dialog получит новое сообщение*/}
      <Sender onAddMessage={addMessage} /> 
    </div>
  );
};

export default App;
