/*
Функция reducer передается хуку useReducer. Об этом мы говорили тут.
В этой функции меняется состояние когда вызывается один из 3 экшенов: 

Экшен для удаления сообщения
Экшен добавления сообщения
Экшен для изменения статуса сообщения (прочитано или отправлено)
*/

export default function reducer(state, action) {
    switch (action.type) {
      case "remove-message":
        console.log('removing message id '+action.payload);
        return {
          ...state,
          messages: state.messages.filter(
            (message) => message.id !== action.payload
          ),
        };
  
      case "add-message":
        console.log('added message');
        return {          
          ...state,
          messages: state.messages.concat(action.payload),
        };
  
      case "update-status":
        console.log('update message');
        return {          
          ...state,
          messages: state.messages.map((message) => {
            if (message.id === action.payload.id) {
              return {
                ...message,
                status: action.payload.status,
              };
            }
  
            return message;
          }),
        };
  
      default:
        throw new Error("Unknown action type");
    }
  }