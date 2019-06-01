import moxios from 'moxios'

import { storeFactory } from '../../test/testUtils'
import { getSecretWord } from './'

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('adds response word to state', () => {
    const secretWord = 'trains'
    const store = storeFactory()

    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: secretWord,
      })
    })

    return store.dispatch(getSecretWord())
      .then(() => {
        const newState = store.getState()
        expect(newState.secretWord).toBe(secretWord)
      })
  })
})