const baseWsUrl = 'wss://ya-praktikum.tech/ws/chats';

const wsClient = (userId: string, chatId: string, token: string) => {
    const webSocket = new WebSocket(`${baseWsUrl}/${userId}/${chatId}/${token}`);

    webSocket.addEventListener('open', () => {
        console.log('Соединение установлено');
      
        webSocket.send(JSON.stringify({
            content: '0',
            type: 'get old',
        }));
    });
      
    webSocket.addEventListener('close', (event) => {
        if (event.wasClean) {
                console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
        }
      
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });
      
    webSocket.addEventListener('message', (event) => {
        try {
            console.log('Получены данные', event.data);
            const data = JSON.parse(event.data);

            //TODO: добавить обработку полученных данных
        } catch {
            console.log('Невозможно обработать полученные данные', event.data);
        }
    });
      
    webSocket.addEventListener('error', (event) => {
        console.log('Ошибка', event);
    });
    
    return webSocket;
}

export default wsClient;
