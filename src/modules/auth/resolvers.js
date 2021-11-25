import model from './model.js'

export default {
    Query: {
        orders: async (_, {
            orderId,
            tableId,
            pagination = {}
        }) => await model.orders(orderId, tableId, pagination)
    },
    Mutation: {
        register: async (_, args) => {
            try {
                let table = await model.register(args)
                console.log('aa');
                if (table) {
                    return {
                        status: 201,
                        message: "The new user succesfully added!",
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

        login: async (_, args) => {
            try {
                let table = await model.login(args)
                console.log('aaa');
                if (table) {
                    return {
                        status: 201,
                        message: "The user succesfully logged in!",
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
    }
}