type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R> ? Awaited<R> : T;
