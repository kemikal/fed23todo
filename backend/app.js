var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const connection = require("./lib/conn");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get("/todo", (req, res) => {

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "SELECT * FROM todo WHERE done=0";

        connection.query(query, (err, data) => {
            if (err) console.log("err", err);

            console.log("todos", data);
            res.json(data);
        })

    })
})

app.post("/todo", (req, res) => {

    let todo = req.body.todo;
    let userId = req.body.userId;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "INSERT into todo (todo, userId) VALUES (?, ?)";
        let values = [todo, userId];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("todos", data);
            res.json({message: "Todo sparad"});
        })

    })
})

app.delete("/todo/:todoId", (req, res) => {
    let todoId = req.params.todoId;

    connection.connect((err) => {
        if (err) console.log("err", err);

        let query = "UPDATE todo SET done=1 WHERE id = ?";
       // let query = "DELETE FROM todo WHERE id = ?";
        let values = [todoId];

        connection.query(query, values, (err, data) => {
            if (err) console.log("err", err);

            console.log("todos", data);
            res.json({message: "Todo raderad"});
        })

    })
})

module.exports = app;
