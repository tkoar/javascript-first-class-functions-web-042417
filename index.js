function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  return function namedFunction(){
    return true
  }
}

function returnsAnAnonymousFunction() {
  return () => true
}


// function Monday() {
//   exerciseRoutine(liftWeights)
// }
//
// function Tuesday() {
//   exerciseRoutine(() => console.log('Stretch! Work that core!'))
//
// function Wednesday() {
//   exerciseRoutine(runFiveMiles)
// }
//
// function Thursday() {
//   exerciseRoutine(liftWeights)
// }
//
// function Friday() {
//   exerciseRoutine(swimFortyLaps)
// }
//
//
// function exerciseRoutine(exercise) {
//   console.log('Go for a five-mile run')
//   exercise()
// }
//
// function morningRoutine(exercise) {
//   var breakfast = null
//
//   if (exercise === liftWeights) {
//     breakfast = 'protein bar'
//   } else if (exercise === swimFortyLaps) {
//     breakfast = 'kale smoothie'
//   } else {
//     breakfast = 'granola'
//   }
//
//   exerciseRoutine(exercise)
//
//   return function() {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`)
//   }
//
// }
//
// var afterExercise = morningRoutine(liftWeights)
//
// afterExercise
