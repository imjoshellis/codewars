function longestSlideDown (pyramid) {
  return pyramid.reduceRight((prev, curr) =>
    curr.map((v, i) => v + Math.max(prev[i], prev[i + 1]))
  )[0]
}
