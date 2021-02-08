import BaseModel from './BaseModel.js'
import PostSchema from '../schema/PostSchema.js'

try {
    var Post = await BaseModel('Post', PostSchema)
} catch (error) {
    console.error(`Error in creating Post Model: ${error}`);
}

export default Post;