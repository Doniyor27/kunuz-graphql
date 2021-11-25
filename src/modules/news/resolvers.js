import model from './model.js'

export default {
    Query: {
        orders: async (_, {
            orderId,
            tableId
        }) => await model.orders(orderId, tableId)
    },
    Mutation: {
        createNews: async (_, args) => {
            try {
                let table = await model.createNews(args)
                console.log(table);
                if (table) {
                    return {
                        status: 201,
                        message: "The new news has been added!",
                        data: table
                    }
                } else throw new Error("There is an error!")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        updateNews: async (_, args) => {
            try {
                let newTitle = await model.updateTitleNews(args)
                let newBody = await model.updateBodyNews(args)
                let newAuthor = await model.updateAuthorNews(args)
                let newView = await model.updateViewNews(args)
                if (newTitle) {
                    return {
                        status: 201,
                        message: "The news has been updated!",
                        data: newTitle
                    }
                } else throw new Error("There is an error!")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        deleteNews: async (_, args) => {
            try {
                let table = await model.deleteNews(args)
                if (table) {
                    return {
                        status: 201,
                        message: "The news has been deleted!",
                        data: table
                    }
                } else throw new Error("There is an error!")
            } catch (error) {
                return {
                    status: 400,
                    message: error,
                    data: null
                }
            }
        }
    },
    Registeraa: {
        orderId: global => global.order_id,
        tableNumber: global => global.table_number,
        orderPaid: global => global.order_paid,
        OrderSets: global => global.order_sets,
        orderCreatedAt: global => global.order_created_at,
        orderPrize: global => global.order_total_price
    }
}