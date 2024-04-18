import { assertEquals, assertThrows } from "https://deno.land/std@0.65.0/testing/asserts.ts"

import { PostText } from "./PostText.ts"

Deno.test("256文字より長い投稿文章はエラーになる", () => {
  const value = "a".repeat(257)
  assertThrows(
    () => new PostText(value),
    Error,
    "投稿文章は256字以内である必要があります。",
  )
})

Deno.test("256文字以下の投稿文章はエラーにならずに取得できる", () => {
  const value = "a".repeat(256)
  const postText = new PostText(value)

  assertEquals(postText.value, value)
})
