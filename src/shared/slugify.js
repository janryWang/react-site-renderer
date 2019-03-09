import Hashids from 'hashids'

export const slugify = (string, path) => {
  const hashids = new Hashids(string)
  return hashids.encode(...path)
}
