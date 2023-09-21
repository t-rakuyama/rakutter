import { RouterContext, helpers } from "https://deno.land/x/oak@v12.6.1/mod.ts"

/**
 * 投稿を削除
 */
export const destroy = (context: RouterContext<'/api/posts/:id'>) => {
  const { id } = helpers.getQuery(context, { mergeParams: true })

  context.response.body = `Delete Post, id: ${id}`
}
