const ExampleSelect = []

for (let id = 1; id < 30; id++) {
  ExampleSelect.push(
    {
      id,
      value: id,
      text: `Text Of Item ID:${id}`
    })
}

export {
  ExampleSelect
}
