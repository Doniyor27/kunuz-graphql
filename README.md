POST 
/register

first_name => string
last_name => string
email => string
password => string
specialist => string 


POST 
/login

email => string
password => string


POST 
/news

news_title => string
news_body -> string
author_id=> Int
category_id=> Int
lang_id=> Int


POST 
/categories

languag_id => Int
categorie_name => string

PUT 
/categories

categorie_id => int
categorie_name => string

DELETE
/categories

category_id => int

DELETE
/news

news_id => int

PUT 
/news 

news_id => int
news_title => string
news_body => string
news_author => int
option => true 