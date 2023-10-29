import { HandlerContext, Handlers } from '$fresh/server.ts'
import { PostResponseService } from '../../../application/PostResponseService.ts'

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
  const response = await new PostResponseService().findAll()
  return new Response(JSON.stringify(response))
}
