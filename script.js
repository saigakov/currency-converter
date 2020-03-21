let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest(); //главный обьект для работы с реакт запросами
    //request.open(method, url, async, login, pass);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //status - получаем код
    //statusText - получаем текстовый ответ
    // responseText / response - содержит текст ответа сервера
    //readyState - содержит текущее состояние запроса
    //Значение	Состояние	Описание
    //0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
    //1	OPENED	Метод open() был вызван.
    //2	HEADERS_RECEIVED	Метод send() был вызван,    //доступны заголовки (headers) и статус.
    //3	LOADING	Загрузка; responseText содержит частичные данные.
    //4	DONE	Операция полностью завершена.
    
    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
           let data = JSON.parse(request.response);
           inputUsd.value = inputRub.value / data.usd; //data.usd - полученные с сервера данные 
        } else {
            inputUsd.value = 'Что-то пошло не так!';
        }
    });

});