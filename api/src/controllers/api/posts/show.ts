import { RouterContext, helpers } from "https://deno.land/x/oak@v12.6.1/mod.ts"

/**
 * 投稿の詳細を取得
 */
export const show = (context: RouterContext<'/api/posts/:id'>) => {
  const { id } = helpers.getQuery(context, { mergeParams: true })

  context.response.body = `Get Post Detail, id: ${id}`
}
