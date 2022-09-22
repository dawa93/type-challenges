type TupleToObject<T extends readonly (string | number)[]> = { 
    [Key in T[number]]: Key 
}