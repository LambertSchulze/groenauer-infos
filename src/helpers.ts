export function getFilenameFromPath(path: String) {
  const pathArr = path.split('/')
  return pathArr[pathArr.length - 1].replace('.md', '')
}