import { expect, test } from 'vitest'

test.each(Array.from({ length: 10 }, (_, i) => i))('renders and updates the DOM %i', async (i) => {
  const list = document.createElement('ul')
  document.body.append(list)
  for (let n = 0; n < 30; n++) {
    const item = document.createElement('li')
    item.textContent = `item ${i}-${n}`
    list.append(item)
    await new Promise(resolve => requestAnimationFrame(resolve))
  }
  expect(list.children).toHaveLength(30)
  list.remove()
})
