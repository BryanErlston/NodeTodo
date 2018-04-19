var Todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.get('/api/todo/:username', function(req, res) {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        Todos.find({ username: req.params.username }, function(err, todo) {
            if(err) throw err;

            res.send(todo);
        });
    });

    app.get('/api/todo/:id', function(req, res) {
        
        Todos.findById({ _id: req.params.id }, function(err, res) {
            if(err) throw err;

            res.send(todo);
        });
    });

    app.post('/api/todo', function(req, res) {
        if(req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function(err, todo) {
                if(err) throw err;

                res.send('Succes');
            })
        } else {

            var newTodo = Todos({
                username: req.body.username,
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newTodo.save(function(err) {
                res.send('Success');
            });
        }
    });

    app.delete('/api/todo', function(req, res) {

        Todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;
            res.send('Success');
        });
    });
}