// 해답 1.
type Length<T extends readonly any[]> = T['length'];
// 해답 2.
// type Length2<T extends { length: number }> = T['length'];