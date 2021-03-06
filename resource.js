const shortid = require('shortid')

let users = [
                {
                    id: shortid.generate(), 
                    name: "jane doe",
                    bio:"nor tarzan's wife, another jane"
                },
                {
                    id: shortid.generate(), 
                    name: "jane elliot",
                    bio:"nor tarzan's wife, another jane"
                },
                {
                    id: shortid.generate(), 
                    name: "bob doe",
                    bio:"nor tarzan's wife, another jane"
                },

                {
                    id: shortid.generate(), 
                    name: "john smith",
                    bio:"nor tarzan's wife, another jane"
                },
                {
                    id: shortid.generate(), 
                    name: "paul pierce",
                    bio:"nor tarzan's wife, another jane"
                }
            ]
            
            function getUsers() {
                return users
            }
            
            function getUserById(id) {
                return users.find(u => u.id === id)
            }
            
            function createUser(data) {
                const payload = {
                    id: String(users.length + 1),
                    ...data,
                }
            
                users.push(payload)
                return payload
            }
            
            function updateUser(id, data) {
                const index = users.findIndex(u => u.id === id)
                users[index] = {
                    ...users[index],
                    ...data,
                }
            
                return users[index]
            }
            
            function deleteUser(id) {
                users = users.filter(u => u.id != id)
            }
            
            module.exports = {
                getUsers,
                getUserById,
                createUser,
                updateUser,
                deleteUser,
            } 