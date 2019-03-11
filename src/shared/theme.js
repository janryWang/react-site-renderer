import palx from 'palx'
import chroma from 'chroma-js'
import bezier from 'cubic-bezier'

const createColors = (h, s, b) => {
  const duration = 200
  const epsilon = 1000 / 60 / duration / 4
  const curve = bezier(0.75, 0.16, 0.37, 0.98, epsilon)
  const results = [],
    length = 10
  for (let i = length - 1; i >= 0; i--) {
    results.push(chroma.hsl(h, s, curve(i / length)).hex())
  }
  return results
}

export default color => {
  const themes = palx(color)
  const [h, s, l] = chroma(color).hsl()
  themes.main = createColors(h, s, l)
  return themes
}
