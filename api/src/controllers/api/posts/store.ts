import { RouterContext } from "https://deno.land/x/oak@v12.6.1/mod.ts"

/**
 * 投稿を作成
 */
export const store = (context: RouterContext<'/api/posts'>) => {
  context.response.body = 'Create Post'
}
