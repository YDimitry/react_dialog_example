/*
В этом файле мы храним функции «помощники».

Мы уже говорили что функции «помощники» создаются в src/helpers.
Но там хранятся общие функции «помощники».

Когда нужны функции «помощники» для конкретного компонента, 
мы рекомендуем создать файл helpers.js в этом компоненте и создавать их в этом файле,
как мы и сделали для компонента Dialog.

В нашем файле у нас одна функция «помощник»: normalizeDialog.
Эта функция конвертирует массив сообщений который приходит с сервера,
в новый массив который будет удобен в использовании в нашем приложении.

На самом деле ничего с сервера не приходит. 
*/

export const normalizeDialog = (dialog) => {
    const newDialog = [];
  
    dialog.forEach((item, i) => {
      if (i === 0 || item.is !== dialog[i - 1].is) {
        newDialog.push({
          type: "message",
          id: `item-message-${item.id}`,
          avatar: item.avatar,
          isReverse: item.is === "my",
          isRemovable: item.is === "my",
          messages: [
            {
              text: item.message,
              status: item.status,
              id: item.id,
              date: item.date,
            },
          ],
        });
      } else {
        const position = newDialog.length - 1;
  
        newDialog[position] = {
          ...newDialog[position],
          messages: newDialog[position].messages.concat({
            text: item.message,
            status: item.status,
            id: item.id,
            date: item.date,
          }),
        };
      }
    });
  
    return newDialog;
  };