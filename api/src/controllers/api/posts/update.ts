import { RouterContext, helpers } from "https://deno.land/x/oak@v12.6.1/mod.ts"

/**
 * 投稿を更新
 */
export const update = (context: RouterContext<'/api/posts/:id'>) => {
  const { id } = helpers.getQuery(context, { mergeParams: true })

  context.response.body = `Update Post, id: ${id}`
}
