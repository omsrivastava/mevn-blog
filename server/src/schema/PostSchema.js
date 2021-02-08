import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    author: { type: String, default: '' },
    title: String,
    content: String,
    created_at: Date,
    updated_at: Date,
})

export default PostSchema