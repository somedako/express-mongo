import { Router } from 'express';
import {
    createPost,
    getAll,
    getById,
    getMyPosts,
    removePost,
    updatePost,
    getPostComments,
} from '../controllers/posts.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = new Router();

// Create Post
router.post('/', checkAuth, createPost);

// Get all posts
router.get('/', getAll);

// Get post by id
router.get('/:id', getById);

// Get my posts
router.get('/user/me', checkAuth, getMyPosts);

// Remove post
router.delete('/:id', checkAuth, removePost);

// Update post
router.put('/:id', checkAuth, updatePost);

// Get post Comments
router.get('/comments/:id', getPostComments);

export default router;
