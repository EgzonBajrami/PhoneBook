const endpoints = {
    addContact:{
        url:'/contacts/createContact', method:'POST'
    },
    getAll:{url:'/contacts/', method:'GET'},
    removeProduct:{url:'/contacts/removeProduct/', method:'POST'},
    getContact:{url:'/contacts/editContact/', method:'POST'},
    editContact:{url:'/contacts/editCont/', method:'POST'}

}
export default endpoints;