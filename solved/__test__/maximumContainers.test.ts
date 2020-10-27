import { maximumContainers } from './maximumContainers'

beforeEach(() => {
  jest.clearAllMocks()
})

it('accepts an array of strings and logs to console', () => {
  const test = ['10 2 5']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalled()
})

it('logs for every item in the array', () => {
  const test = ['10 2 5', '12 4 4', '6 2 2']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalledTimes(3)
})

it('logs 6 for "10 2 5"', () => {
  const test = ['10 2 5']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalledWith(6)
})

it('logs 3 for "12 4 4"', () => {
  const test = ['12 4 4']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalledWith(3)
})

it('logs 5 for "6 2 2"', () => {
  const test = ['6 2 2']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalledWith(5)
})

it('logs 3 and 4 for ["8 4 2", "7 2 3"]', () => {
  const test = ['8 4 2', '7 2 3']
  const spy = jest.spyOn(console, 'log')
  maximumContainers(test)
  expect(spy).toHaveBeenCalledWith(3)
  expect(spy).toHaveBeenCalledWith(4)
})
