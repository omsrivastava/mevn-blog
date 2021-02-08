import { Router } from 'express'

import config from '../../config/index.js'

import PostController from '../../controllers/PostController.js'


const router = Router()

// Get Posts
router.get('/posts', async (req, res) => {
    const { status, posts } = await PostController.list()

    return res.status(status).json(posts)
})

// Create Post
router.post('/posts', async (req, res) => {
    const { status, data } = await PostController.create(req)

    return res.status(status).json(data)
})

// Delete Post
router.delete('/posts/:post', async (req, res) => {
    const { status, data } = await PostController.delete(req)

    return res.status(status).json(data)
})


// const getPosts = async () => {
//     // const client: MongoClient = new MongoClient(config.dbUrl, { useNewUrlParser: true });

//     // await client.connect(err => {
//     //     const collection = client.db(config.dbUrl).collection('posts')
//     //     client.close()
//     // })

//     const client = await MongoClient.connect(config.dbUrl, { useNewUrlParser: true })

//     return client.db(config.dbName).collection('posts')
// }


export default router