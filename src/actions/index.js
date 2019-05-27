import axios from 'axios'

import { getLetterMatchCount } from '../helpers'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD'
}

export const guessWord = (guessedWord) => {
  return (dispatch, getState) => {
    // thunk allows the 'getState' here
    const state = getState()
    console.log(state, 'state')
    const secretWord = state.secretWord
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount }
    })

    if (guessedWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      })
    }
  }
}

export const getSecretWord = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000')
  }
}