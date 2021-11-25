import {
    fetch
} from '../../lib/postgres.js'
import {
    createNewsQuery,
    updateNewsTitleQuery,
    updateNewsBodyQuery,
    updateNewsAuthorQuery,
    deleteNewsQuery,
    getNewsUNIQ
} from "./query.js"

const readNewsUNIQ = async ({
    lang,
    author_id,
    category_id,
    news_id
}) => {
    console.log(lang, author_id, category_id, news_id);
    try {
        const tes = await fetch(getNewsUNIQ, lang, author_id, category_id, news_id)
        console.log(tes);
        return tes
    } catch (error) {
        console.log(error);
    }
}

const createNews = async ({
    title,
    body,
    category_id,
    author,
    language_id
}) => {
    try {
        return await fetch(createNewsQuery, title, body, category_id, author, language_id)
    } catch (error) {
        console.log(error);
    }
}

const updateTitleNews = async ({
    new_id,
    title
}) => {
    try {
        return await fetch(updateNewsTitleQuery, new_id, title)
    } catch (error) {
        console.log(error);
    }
}

const updateBodyNews = async ({
    news_id,
    body
}) => {
    try {
        return await fetch(updateNewsBodyQuery, news_id, body)
    } catch (error) {
        console.log(error);
    }
}

const updateAuthorNews = async ({
    news_id,
    author
}) => {
    try {
        return await fetch(updateNewsAuthorQuery, news_id, author)
    } catch (error) {
        console.log(error);
    }
}

const updateViewNews = async ({
    news_id,
    view
}) => {
    try {
        if (view === true) {
            return await fetch('update news set news_views = news_views + 1 where news_id = $1', news_id)
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteNews = async ({
    news_id
}) => {
    try {
        return await fetch(deleteNewsQuery, news_id)
    } catch (error) {
        console.log(error);
    }
}


export default {
    createNews,
    updateTitleNews,
    updateBodyNews,
    updateViewNews,
    updateAuthorNews,
    deleteNews
}