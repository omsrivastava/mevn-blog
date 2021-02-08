import Post from '../models/Post.js'
import { Validator } from 'node-input-validator'


export default {
    list: async () => {
        let posts = [];

        try {
            posts = await Post.find({})
        } catch (error) {
            console.log(`Error in fetching posts: ${error}`)
        }

        return { status: 200, posts }
    },

    create: async (req) => {
        try {
            const v = new Validator(req.body, {
                author: 'required',
                title: 'required',
                content: 'required',
            })

            if (!await v.check()) {
                return {
                    status: 422,
                    data: { error: v.errors }
                }
            }

            const data = {
                ...req.body,
                created_at: new Date(),
                updated_at: new Date(),
            }

            const post = await Post(req.body).save()

            return {
                status: 201,
                data: post,
            }
        } catch (error) {
            console.error(`Failed to create new Post: ${error}`)

            return {
                status: 500,
                data: { error },
            }
        }
    },

    delete: async (req) => {
        try {
            const v = new Validator(req.params, { post: 'required' })

            if (!await v.check()) {
                return {
                    status: 422,
                    data: { error: v.errors }
                }
            }

            await Post.findByIdAndDelete(req.params.post)

            return { status: 200 }
        } catch (error) {
            console.error(`Failed to delete Post: ${error}`)

            return { status: 500, error }
        }
    },
}