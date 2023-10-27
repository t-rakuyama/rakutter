import { HandlerContext, Handlers } from '$fresh/server.ts'
import { PostRepository } from '../../../domains/post/repositories/PostRepository.ts'

export const handler: Handlers = {
  GET: async (req: Request, ctx: HandlerContext): Promise<Response> => {
    return await index(req, ctx)
  },
}

/**
 * 投稿の一覧を返す
 */
const index = async (
  _req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const posts = await new PostRepository().findAll()
  // TODO API返却用にどこかで整形 これをServiceクラスでやればいいのかな？

  return new Response(JSON.stringify(posts))
}
