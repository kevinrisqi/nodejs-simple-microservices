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
            properties: {}
        },
        400: {
            description: 'Failed to send Response',
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
            description: 'Operation Failed',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        }
    }
}

const insertTeknisi = {
    schema: {
        summary: 'Add Teknisi',
        description: 'Add Teknisi',
        params: {},
        body: {
            description: 'to Get response body',
            type: 'object',
            properties: {
                nama: {
                    type: 'string',
                },
                spesialis: {
                    type: 'string'
                },
                platform: {
                    type: 'string'
                },
                jumlah_antrian: {
                    type: 'number'
                }
            }
        },
    },
    response: {
        200: {
            description: 'Succesful Response',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        },
        400: {
            description: 'Failed Response',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        }
    }

}

const updateTeknisi = {
    schema: {
        summary: 'Update Teknisi',
        description: 'Update Teknisi',
        params: {
            description: 'Id to get spesific teknisi',
            type: 'object',
            properties: {
                id: { type: 'number' }
            }
        },
        body: {
            description: 'to Get response body',
            type: 'object',
            properties: {
                nama: {
                    type: 'string',
                },
                spesialis: {
                    type: 'string'
                },
                platform: {
                    type: 'string'
                },
                jumlah_antrian: {
                    type: 'number'
                }
            }
        },
    },
    response: {
        200: {
            description: 'Succesful Response',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        },
        400: {
            description: 'Failed Response',
            type: 'object',
            properties: {},
            headers: {
                'Access-Control-Allow-Origin': {
                    type: 'string'
                }
            }
        }
    }

}



module.exports = {
    findAllTeknisi,
    findTeknisiByID,
    deleteTeknisi,
    insertTeknisi,
    updateTeknisi
}