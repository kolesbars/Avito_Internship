# Avito_Internship
Исполнитель: Колесников Егор @KolesBars Koles.e.13@mail.ru;

Start app:
yarn install
yarn start

В связи с тем, что API Hacker news позволяет запрашивать данные только по каждой новости или комментарию в отдельности, рассматривал 2 варианта: 1) загружать все данные по каждой новости в Store и только после отрисовывать на странице;
          2) отрисовывать новости/комментарии по мере их загрузки напряму в компоненте не записывая в Store.
Решил остановиться на 2ом варианте т.к. посчитал, что пользователю лучше видеть хотя бы часть загруженных элементов, чем ждать пока загрузятся все.