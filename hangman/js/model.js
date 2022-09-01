const model = {
  // 1. Application state
  app: {
    currentPage: 'start' // start, game, results
  },
  // 2. Inputs
  inputs: {
    drawPage: {
      currentCategoryId: 0,
      currentAnswer: '',
      currentInput: '',
      remainingBalloons: 0,
      incorrectSelectedLetters: [],
    }
  },
  // 3. Common data
  answers: [
    {id: 1, category: 'Phrases', answer: 'break a leg'},
    {id: 2, category: 'Movies', answer: 'the witches'},
    {id: 2, category: 'Eat & Drink', answer: 'mustard'},
  ],
  scores: {
    saved: 0,
    best: 0,
  },
  alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
};