import { Router } from 'https://deno.land/x/oak@v12.6.1/mod.ts'

import { postsController } from './controllers/api/posts/index.ts'

const router = new Router()

router.get('/api/posts', postsController.list)
router.get('/api/posts/:id', postsController.show)
router.post('/api/posts', postsController.store)
router.put('/api/posts/:id', postsController.update)
router.delete('/api/posts/:id', postsController.destroy)

export default router
