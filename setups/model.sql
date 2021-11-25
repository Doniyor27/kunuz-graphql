-- create database kunuz;

-- create table users (
-- 	user_id serial not null,
--     username character varying(30) not null,
--     password character varying(30) not null,
--     gender smallint not null,
-- 	email character varying(30) not null,
-- 	specialist character varying(30) not null
-- );

-- create table langs (
-- 	lang_id smallint not null,
-- 	lang_name character varying(15) not null
-- );

-- create table categories (
-- 	category_id int generated always as identity primary key,
-- 	category_name character varying(30) not null,
-- 	lang_id int not null references langs(lang_id) on delete cascade
-- );

-- create table news (
-- 	news_id bigserial not null,
-- 	news_title int generated always as identity primary key,
-- 	news_body smallint not null,
--     news_created_at timestamptz default current_timestamp,
-- 	-- news_views int not null references steaks(steak_id) on delete cascade,
-- 	author_id int not null references users(user_id) on delete cascade,
-- 	category_id int not null references categories(category_id) on delete cascade,
-- 	lang_id int not null references langs(lang_id) on delete cascade
-- );

drop table if exists users cascade;
create table users(
    user_id int generated always as identity primary key,
    first_name varchar(26) not null,
    last_name varchar(26) not null,
    password varchar(36) not null,
    email varchar(26) not null,
    specialist varchar(36) not null
);

drop table if exists languages cascade;
create table languages(
    languages_id int generated always as identity primary key,
    languages_name varchar(26) not null
);

drop table if exists categories cascade;
create table categories(
    categories_id int generated always as identity primary key,
    categories_name varchar(26) not null,
    languages_id int references languages(languages_id) 
);

drop table if exists news cascade;
create table news(
    news_id int generated always as identity primary key,
    news_title varchar(126) not null,
    news_body text not null,
    news_time timestamptz default current_timestamp, 
    news_views int,
    author_id smallint not null,
    categories_id int not null references categories(categories_id), 
    languages_id int not null references languages(languages_id) 
);


insert into users(first_name, last_name, password, email, specialist) values ('akbar', 'shamsiyev', '1234567!ab', 'akbar77@gmail.com', 'contectmaker')