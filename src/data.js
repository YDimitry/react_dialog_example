/*
В этом файле мы описываем массив сообщений, которые мы могли бы запросить с сервера. Но так как у нас нет сервера, мы просто сами создали этот массив. 
Каждый элемент массива состоит из следующих свойств:

avatar — Аватарка пользователя который отправил сообщение.
message — Сообщение которое отправил пользователь.
id — Идентификатор сообщения.
date — Дата отправки сообщения.
is — Свойство которое показывает кто отправил сообщение. her значит он, my значит вы.
status — Статус сообщения. Оно имеется только у сообщения, которое отправили вы. Всего у нас может быть 2 статуса: «отправлено» или «прочитано».
*/

const dialog = [
    {
      avatar:
        "https://sun9-2.userapi.com/c638729/v638729951/1d0ea/f9V7aJyh6tw.jpg",
      message: "Привет",
      id: 0,
      date: "2020-10-11T10:09:04.712Z",
      is: "her",
    },
    {
      avatar:
        "https://sun9-2.userapi.com/c638729/v638729951/1d0ea/f9V7aJyh6tw.jpg",
      message: "Как дела?",
      id: 1,
      date: "2020-10-11T10:19:04.712Z",
      is: "her",
    },
    {
      avatar:
        "https://sun9-2.userapi.com/c638729/v638729951/1d0ea/f9V7aJyh6tw.jpg",
      message: "Я только приехал с Марса",
      id: 2,
      date: "2020-10-11T10:24:04.712Z",
      is: "her",
    },
    {
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: "Привет! Все хорошо, ты как?",
      id: 3,
      date: "2020-10-11T11:09:04.712Z",
      status: "sended",
      is: "my",
    },
    {
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: "Ааа, да, я слышал",
      id: 4,
      date: "2020-10-11T12:09:04.712Z",
      status: "sended",
      is: "my",
    },
    {
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: "Круто",
      id: 5,
      date: "2020-10-11T13:01:04.712Z",
      status: "readed",
      is: "my",
    },
    {
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: "Полет нормальный?",
      id: 6,
      date: "2020-10-11T14:09:07.712Z",
      status: "readed",
      is: "my",
    },
    {
      avatar:
        "https://sun9-2.userapi.com/c638729/v638729951/1d0ea/f9V7aJyh6tw.jpg",
      message: "Да, все круто. Только никому не говори)",
      id: 7,
      date: "2020-10-11T15:09:04.712Z",
      is: "her",
    },
  ];
  
  export default dialog;