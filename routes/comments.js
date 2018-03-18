let store={}
store.posts=[]

module.exports={

  getComments(req, res) {
    
    res.status(200).send(store.posts)
  }, 
  addComment(req, res) {
    
    let newpost=req.body
    let id=store.posts.length
    store.posts.push(newpost)
    res.status(201).send({id:id})
  },
  updateComment(req, res) {
   store.posts[req.params.id]= req.body
   res.status(200).send(store.posts[req.params.id])
},
  removeComment(req, res) {
    
    store.posts.splice(req.params.id,1)
    res.status(204).send()
  }  
}