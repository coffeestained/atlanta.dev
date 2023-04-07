import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '../Home.vue'

describe('Home', () => {
  it('renders properly', () => {
    const wrapper = mount(Home, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
