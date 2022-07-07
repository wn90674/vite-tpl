import { describe, expect, it } from 'vitest'
import { sliceLength } from '@/utils/common'

describe('test: sliceLenth', () => {
  it('string', () => {
    expect(sliceLength('012345678', 1, 3)).toEqual('012')
  })

  it('array', () => {
    expect(sliceLength('012345678'.split(''), 1, 3)).toEqual(
      [
        '0',
        '1',
        '2',
      ],
    )
  })
})
