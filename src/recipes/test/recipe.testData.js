module.exports.validRecipe = (name) => {
  return {
    name: `${name}`,
    ingredients: [
      '1lb Ribeye',
      'Olive Oil',
      'Salt and Pepper',
      '1 pat of butter'
    ],
    steps: [
      '1. Let the steak come up to room temp[erature. Heat 1 tbs of olive oil in a heavy cast iron skillet. Salt and pepper both sides of the steak.',
      '2. Add the steak to the skillet cooking about 3-4 minutes a side. Cookj untill internal temerature reaches 132F for rare'
    ]
  }
}

module.exports.noNameRecipe = () => {
  return {
    ingredients: [
      '1lb Ribeye',
      'Olive Oil',
      'Salt and Pepper',
      '1 pat of butter'
    ],
    steps: [
      '1. Let the steak come up to room temp[erature. Heat 1 tbs of olive oil in a heavy cast iron skillet. Salt and pepper both sides of the steak.',
      '2. Add the steak to the skillet cooking about 3-4 minutes a side. Cookj untill internal temerature reaches 132F for rare'
    ]
  }
}

module.exports.withIDRecipe = (name, id) => {
  return {
    _id: id,
    name: `${name}`,
    ingredients: [
      '1lb Ribeye',
      'Olive Oil',
      'Salt and Pepper',
      '1 pat of butter'
    ],
    steps: [
      '1. Let the steak come up to room temp[erature. Heat 1 tbs of olive oil in a heavy cast iron skillet. Salt and pepper both sides of the steak.',
      '2. Add the steak to the skillet cooking about 3-4 minutes a side. Cookj untill internal temerature reaches 132F for rare'
    ]
  }
}

module.exports.missingStepsRecipe = (name) => {
  return {
    name: `${name}`,
    ingredients: [
      '1lb Ribeye',
      'Olive Oil',
      'Salt and Pepper',
      '1 pat of butter'
    ]
  }
}
