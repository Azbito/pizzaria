export const handleInputOnChange = (setState, key, value) => {
  setState(prevState => ({
    ...prevState,
    [key]: value
  }))
}
