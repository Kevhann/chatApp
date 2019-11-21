export const getCurrentTimeStamp = () => Date().substring(16, 24)

export const randomColor = () => {
  return "hsl(" + 360 * Math.random() + "," + 100 + "%," + 50 + "%)"
}

export const idGenerator = () => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
}
