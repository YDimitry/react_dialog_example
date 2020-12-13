
/*
В этом файле мы изменяем массив сообщений с помощью функции normalizeDialog (10 строка).
Далее мы просто рендерим компонент Item в массиве (15 строка).

В качестве значения атрибута key, вместо числовых индексов массива мы используем свойство id, так как элементы массива normalizedDialog (10 строка) могут меняться местами когда мы будем удалять сообщения.
*/
import React, { useReducer, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

import { normalizeDialog } from "./helpers";
import reducer from "./reducer";
import data from "../../data";

import "./styles.css";

const Dialog = ({ newMessage }) => {
// useRef возвращает объект со свойством current. привязать этот реф к React элементу делается с помощью атрибута ref
  const dialogRef = useRef(); 
  const [state, dispatch] = useReducer(reducer, {
    messages: data, // начальное состояние
  });

  useEffect(() => {
    if (newMessage) { // если массив сообщений не пустой будет вызван reducer с типом add-message
      dispatch({
        type: "add-message",
        payload: newMessage,
      });

      setTimeout(() => {
        dispatch({ // после 1с будет вызван reducer с типом update-status (сообщение прочтено)
          type: "update-status",
          payload: {
            id: newMessage.id,
            status: "readed",
          },
        });
      }, 1000);
    }
  }, [newMessage]);
// объявляем хук useEffect, который будет вызываться только если проп newMessage изменился
// В этом хуке с помощью функции dispatch мы добавляем новое сообщение в текущий массив сообщений.
// А через одну секунду меняем статус у нового сообщения на «прочитано».

  useEffect(() => {
    dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }, [state.messages.length]);
// объявляем хук useEffect, который будет вызываться только если изменилось количество сообщений в массиве.
// В этом хуке с помощью рефа мы будем смещать скролл элемента div


  const onRemove = (id) => {
    dispatch({
      type: "remove-message",
      payload: id,
    });
  };

  const normalizedDialog = normalizeDialog(data);

  return (
    <div className="dialog">
      <div className="overflow" ref={dialogRef}>
        {normalizedDialog.map((item) => (
          <Item {...item} key={item.id} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  newMessage: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Dialog;
/*
Как мы говорил выше при отправки сообщения компонент Sender вызывает у себя проп onAddMessage и передает ему новое сообщения.

Далее компонент App в качестве состояния устанавливает переданное сообщение (см. 7 строка в файле src/App.js).
Потом происходит ререндер компонента App и это сообщения передается компоненту Dialog (см. 12 строка в файле src/App.js).

Поэтому в примере выше мы объявляем хук useEffect, который будет вызываться только если проп newMessage изменился (18 строка). 
В этом хуке с помощью функции dispatch мы добавляем новое сообщение в текущий массив сообщений.
А через одну секунду меняем статус у нового сообщения на «прочитано».

На 52 строке мы получаем доступ к элементу div с помощью рефа.
На 37 строке мы объявляем хук useEffect, который будет вызываться только если изменилось количество сообщений в массиве.
В этом хуке с помощью рефа мы будем смещать скролл элемента div вниз чтобы были видны последние сообщения, каждый раз когда пользователь отправляет сообщение.

*/