import { HandlerContext, Handlers } from "$fresh/server.ts"
import { PostResponseService } from "../../../domain/post/services/PostResponseService.ts"
import { PostRepository } from "../../../infrastructure/repositories/PostRepository.ts"

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
  // TODO DIモジュールを用いてプレゼンテーションがインフラストラクチャに依存しないようにする
  const postRepository = new PostRepository()

  const response = await new PostResponseService(postRepository).findAll()
  return new Response(JSON.stringify(response))
}
