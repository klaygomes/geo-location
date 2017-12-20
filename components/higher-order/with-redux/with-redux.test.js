import React from 'react'
import { shallow, mount } from 'enzyme'
import 'jest-styled-components'

import WithRedux from './'
import actionsCreators from '../../../store/action-creators'
import {initialState} from '../../../store'

class Dumb extends React.Component {
    displayName = 'Dumb'
    render () {
      return <span>Hello!</span>
    }
}

describe('<MapPanel />', () => {
  let fakeStore
  beforeEach(() => {
    fakeStore = {
      subscribe: jest.fn(),
      dispatch: jest.fn(),
      getState: () => initialState
    }
  })
  it('should render without crashing', () => {
    const ReduxPowered = WithRedux(Dumb)
    const wrapper = shallow(<ReduxPowered store={fakeStore} />)
    expect(wrapper.exists()).toBeTruthy()
  })
  it('should has a displayName', () => {
    expect(WithRedux.displayName).toBeTruthy()
  })
  it('should contains decorated component', () => {
    const ReduxPowered = WithRedux(Dumb)
    const wrapper = mount(<ReduxPowered store={fakeStore} />)
    expect(wrapper.find('Dumb').exists()).toBeTruthy()
  })
  it('should dispatch myLocationReset event', () => {
    const ReduxPowered = WithRedux(Dumb)
    const wrapper = mount(<ReduxPowered store={fakeStore} />)
    const instance = wrapper.find('Dumb').props()
    instance.onResetMyLocation()
    wrapper.update()
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual(actionsCreators.myLocationReset())
  })
  it('should dispatch myLocationFetch event', () => {
    const ReduxPowered = WithRedux(Dumb)
    const wrapper = mount(<ReduxPowered store={fakeStore} />)
    const instance = wrapper.find('Dumb').props()
    instance.onRequestMyLocation()
    wrapper.update()
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual(actionsCreators.myLocationFetch())
  })
  it('should dispatch hostnameLocationFetch event', () => {
    const hostname = 'avenuecode.com'
    const ReduxPowered = WithRedux(Dumb)
    const wrapper = mount(<ReduxPowered store={fakeStore} />)
    const instance = wrapper.find('Dumb').props()
    instance.onHostname(hostname)
    wrapper.update()
    expect(fakeStore.dispatch.mock.calls[0][0]).toEqual(actionsCreators.hostnameLocationFetch(hostname))
  })
})
