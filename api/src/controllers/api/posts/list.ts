import { RouterContext } from "https://deno.land/x/oak@v12.6.1/mod.ts"

/**
 * 投稿の一覧を取得
 */
export const list = (context: RouterContext<'/api/posts'>) => {
  context.response.body = 'Get All Posts'
}
