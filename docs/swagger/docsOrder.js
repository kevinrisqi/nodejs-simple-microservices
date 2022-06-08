const findAllOrder = {
    schema: {
        summary: 'Find All Order',
        description: 'Find All Order',
        type: 'object'
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object',
        },
        400: {
            description: 'Failed Response',
            type: 'object',
        }
    }
}

module.exports = {
    findAllOrder,
}