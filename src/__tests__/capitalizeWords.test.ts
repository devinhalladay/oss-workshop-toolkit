import { capitalizeWords } from '../capitalize'

describe('capitalizeWords', () => {
  it.skip('should capitalize all words in string', () => {
    const result = capitalizeWords('i want to be capitalized')
    expect(result).toBe('I Want To Be Capitalized')
  })
})
