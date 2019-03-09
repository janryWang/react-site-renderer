import { isFn, isArr } from './types'
import { slugify } from './slugify'
const traverse = (docs, callback) => {
  const _traverse = (docs, path = []) => {
    if (isArr(docs)) {
      docs.forEach((doc, key) => {
        return _traverse(doc, path.concat(key))
      })
    } else if (docs) {
      docs.slug = slugify(docs.title, [9, 9].concat(path))
      if (isFn(callback)) {
        callback(docs, path)
      }
      if (isArr(docs.children)) {
        _traverse(docs.children, path)
      }
    }
  }
  return _traverse(docs)
}

export const parseDocs = docs => {
  let homes = [],
    headers = []
  traverse(docs, (doc, path) => {
    if (doc.home) {
      homes.push(doc)
    }
    if (path.length == 1) {
      headers.push(doc)
    }
  })
  if (homes.length == 0 && headers[0]) {
    homes.push(headers[0])
  }
  return { homes, headers }
}
