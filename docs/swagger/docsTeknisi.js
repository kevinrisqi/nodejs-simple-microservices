const findAllTeknisi = {
    schema: {
        summary: 'Find All Teknisi',
        description: 'Find All Teknisi',
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
            properties: {

            }
        },
        400: {
            description: 'Failed to send Response'
        }
    }

}

const findTeknisiByID = {
    schema: {
        summary: 'Find Teknisi By ID',
        description: 'Find Teknisi By ID',
        params: {
            description: 'Id to get spesific teknisi',
            type: 'object',
            properties: {
                id: { type: 'number' }
            }
        }
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
            description: 'Failed to get Response'
        }
    }
}

const deleteTeknisi = {
    schema: {
        summary: 'Delete Teknisi',
        description: 'Delete Teknisi',
        params: {
            description: 'Delete Teknisi By Id',
            type: 'object',
            properties: {
                id: { type: 'number' }
            }
        },
    },
    response: {
        200: {
            description: 'Operation Success',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        },
        400: {
            description: 'Operation Failed'
        }
    }
}

const insertTeknisi = {
    schema: {
        summary: 'Add Teknisi',
        description: 'Add Teknisi',
        params: {
            description: 'Delete Teknisi By Id',
            type: 'object',
            properties: {
                body: { type: 'string' }
            }
        },
    },
    // parameters: {
    //     name: "body",
    //     in: "body",
    //     paramType: "body",
    //     description: "body for the POST request",
    //     required: false
    // },
    response: {
        200: {
            description: 'Operation Success',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        },
        400: {
            description: 'Operation Failed'
        }
    }
}

module.exports = {
    findAllTeknisi,
    findTeknisiByID,
    deleteTeknisi,
    insertTeknisi,
}