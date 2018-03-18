let store={}
store.posts=[]

module.exports = {
  getPosts(req, res) {
  res.send(store.posts)
  },

  addPost(req, res) {

  	let newpost=req.body
    let id=store.posts.length
    store.posts.push(newpost)
    res.status(201).send({id:id})
  },
  updatePost(req, res) {
  	store.posts[req.params.id]= req.body
   res.status(200).send(store.posts[req.params.id])
  },
  removePost(req, res) {
	 store.posts.splice(req.params.id,1)
     res.status(204).send()
  }
}

