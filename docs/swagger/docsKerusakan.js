const findAllKerusakan = {
    schema: {
        summary: 'Find All Kerusakan',
        description: 'Find All Kerusakan',
        type: 'object',
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

const findKerusakanByID = {
    schema: {
        summary: 'Find Kerusakan by ID',
        description: 'Find Kerusakan by ID',
        type: 'object',
        params: {
            id: {
                type: 'number'
            }
        }
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

const deleteKerusakan = {
    schema: {
        summary: 'Delete Kerusakan',
        description: 'Delete Kerusakan',
        type: 'object',
        params: {
            id: {
                type: 'number'
            }
        }
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

const addKerusakan = {
    schema: {
        summary: 'Add Kerusakan',
        description: 'Add Kerusakan',
        type: 'object',
        body: {
            jenis_kerusakan: {
                type: 'string'
            },
            lama_pengerjaan: {
                type: 'number'
            },
            harga: {
                type: 'number'
            }
        }
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

const updateKerusakan = {
    schema: {
        summary: 'Update Kerusakan',
        description: 'Update Kerusakan',
        type: 'object',
        params: {
            id: {
                type: 'number'
            }
        },
        body: {
            jenis_kerusakan: {
                type: 'string'
            },
            lama_pengerjaan: {
                type: 'number'
            },
            harga: {
                type: 'number'
            }
        }
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
    findAllKerusakan,
    findKerusakanByID,
    deleteKerusakan,
    addKerusakan,
    updateKerusakan,
}