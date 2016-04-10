#Pokedex project by Igor Medvedenko


Технології використані під час написання проекту:

* HTML

* CSS (LESS)

* JavaScript (ECMASctipt 5)

* jQuery

* шаблонізатор HandleBars

* сервер на Node.js

* Gulp

* Bower

* Common.js (Browserify)

**  ** ** ** **  ***  ** 

###Як запустити проект?

1. Спочатку потрібно викачати всі залежності командою `npm i`

2. Потім спомпілювати і запустити проект командою `gulp` або можна запускити bash script який зробить дані команди автоматично `./quickstart build run` в рутовій дерикторії проекту

3. Відкрити додаток в браузері за адресою [`http://localhost:2000/`](http://localhost:2000/)


Додаток задеплоїний на сервер Heroku, ви можете його відкрити за адресою [ [`https://pokedex4kottans.herokuapp.com/pokemons.html`](https://pokedex4kottans.herokuapp.com/pokemons.html) (!майте на увазі, перший запит на данну адресу займе більше часу, оскільки сервер виходить з режиму сну)



## Додаток має дві версії: розробка( */client_scr*) та продакшик(папка */client_build*)

+ В **Development** верії код розбитий на модулі. Додаток реалізовано відповідно до **Model View Controller** архітектури (Model => */models*, View Controller => */components*)


+ В **Production** верії весь модульний код скомпільований в файл *pokemons.js* за допомогою **Browserify**

*в даній версії html, css, та js файли  мініфіковані*

******

Виконані додаткові завдання:

* Адаптивний дизайн

* Фільтр видимих покеменів по типу



*З повагою, Медевденко Ігор*

