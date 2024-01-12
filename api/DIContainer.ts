import { DI } from 'https://deno.land/x/dino@v2.0.1/mod.ts'
import { PostRepositoryInterface } from './domain/post/repositories/PostRepositoryInterface.ts'
import { PostRepository } from './infrastructure/repositories/PostRepository.ts'

type Deps = {
  postRepository: PostRepositoryInterface
}

export class DIContainer {
  private readonly di = new DI<Deps>()

  constructor() {
    this.di.set('postRepository', new PostRepository())
  }

  get<K extends keyof Deps>(key: K): Deps[K] {
    return this.di.get(key)
  }
}
