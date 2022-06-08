const findAllOrder = {
    schema: {
        summary: 'Find All Order',
        description: 'Find All Order',
        params: {},
    },
    response: {
        200: {
            description: 'Success Response',
            type: 'object',
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            },
            properties: {}
        },
        400: {
            description: 'Failed Response',
            type: 'object',
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            },
            properties: {}
        }
    }
}

const findAllTeknisi = {
    schema: {
        summary: 'Find All Teknisi',
        description: 'Find All Teknisi by Admin',
        type: 'object',
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object',
        },
        400: {
            description: 'Failed Response',
            type: 'object'
        }
    }
}

const spesificOrder = {
    schema: {
        summary: 'Find Spesific Order',
        description: 'Find Spesific Order by Admin',
        type: 'object',
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object'
        },
        400: {
            description: 'Failed Response',
            type: 'object'
        }
    }
}

const spesificTeknisi = {
    schema: {
        summary: 'Find Spesific Teknisi',
        description: 'Find Spesific Teknisi by Admin',
        type: 'object'
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object'
        },
        400: {
            description: 'Failed Response',
            type: 'object'
        }
    }
}

const findOrderByStatus = {
    schema: {
        summary: 'Find Order by Status',
        description: 'Find Oder by Status',
        type: 'object',
        params: {
            status: {
                type: 'string',
                description: 'Menunggu antrian / Sedang dikerjakan / Selesai'
            }
        }
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object'
        },
        400: {
            description: 'Failed Response',
            type: 'object'
        }
    }
}

const findOrderByName = {
    schema: {
        summary: 'Find Order by Name',
        description: 'Find Order by Name',
        type: 'object',
        params: {
            name: {
                type: 'string',
                description: 'Input name of Customers'
            }
        },
    },
    response: {
        200: {
            description: 'Successful Response',
            type: 'object'
        },
        400: {
            description: 'Failed Response',
            type: 'object'
        }
    }
}

module.exports = {
    findAllOrder,
    findAllTeknisi,
    spesificOrder,
    spesificTeknisi,
    findOrderByStatus,
    findOrderByName,
}