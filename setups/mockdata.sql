insert into users (first_name, last_name, password, email, specialist) values
('ahror', 'adhamxo''jaev', '1234567ab!', 'nimadr1@gmail.com', 'backend dev'),
('abdulqodir', 'tolipov', '1234567ab!', 'nimadr2@gmail.com', 'frontend dev'),
('asadulloh', 'baxromov', '1234567ab!', 'nimadr3@gmail.com', 'web dev'),
('abdulaziz', 'abduazimov', '1234567ab!', 'nimadr4@gmail.com', 'mobile dev'),
('javohir', 'tursunov', '1234567ab!', 'nimadr5@gmail.com', 'ios dev'),
('g''aybulla', 'fayzullayev', '1234567ab!', 'nimadr6@gmail.com', 'android dev');

insert into languages (languages_name) values
('uz'),
('ru'),
('en');

insert into categories (categories_name, languages_id) values
('O''zbekiston', 1),
('Jahon', 1),
('Sport', 1),
('Узбекистан', 2),
('Спорт', 2),
('Мир', 2),
('Uzbekistan', 3),
('Sport', 3),
('World', 3);

insert into news (news_title, news_body, author_id, categories_id, languages_id) values 
('olimpiada','olimpiadachilar qaytdi((',1,3,1);
