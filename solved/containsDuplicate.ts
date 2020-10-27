export const containsDuplicate = (arg: number[]): boolean => {
  const set = new Set(arg)
  return set.size !== arg.length
}
