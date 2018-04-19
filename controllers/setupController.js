var Todos = require('../models/todoModels');

/**
 * 
 * @param {Object[]} app
 * @description This method creates seed date for the MongoDB.
 * @memberOf models
 */
module.exports = function(app) {

    app.get('/api/setupTodos', function(req, res) {

        // seed dataBase
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Feed dog',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn NodeJs',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'bryan',
                todo: 'Finish work for sprint',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'bryan',
                todo: 'Get OCP cert',
                isDone: false,
                hasAttachment: true
            },
            {
                username: 'koos',
                todo: 'Mow the lawn',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'koos',
                todo: 'Braai',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Take dustbins out',
                isDone: false,
                hasAttachment: false
            },
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
};