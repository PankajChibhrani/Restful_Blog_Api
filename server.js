const express=require('express')
const bodyParser=require('body-parser')
const logger=require('morgan')

var index=require('./routes/index.js')
let app= express()

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/posts',index.posts.getPosts)

app.post('/posts',index.posts.addPost)

app.put('/posts/:id',index.posts.updatePost)

app.delete('/posts/:id',index.posts.removePost)

app.get('/posts/comments',index.comments.getComments)

app.post('/posts/comments',index.comments.addComment)

app.put('/posts/comments/:id',index.comments.updateComment)

app.delete('/posts/comments/:id',index.comments.removeComment)

app.listen(4000)