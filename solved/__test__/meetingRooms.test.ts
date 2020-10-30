import { canAttendMeetings } from './meetingRooms'

it('receives number[][] and returns boolean', () => {
  const test = [
    [1, 2],
    [3, 4]
  ]
  expect(canAttendMeetings(test)).toBe(true)
})

it('handles [[0, 30], [5, 10], [15, 20]]', () => {
  const test = [
    [0, 30],
    [15, 20],
    [5, 10]
  ]
  expect(canAttendMeetings(test)).toBe(false)
})

it('handles [[7, 10], [2, 4]]', () => {
  const test = [
    [7, 10],
    [2, 4]
  ]
  expect(canAttendMeetings(test)).toBe(true)
})
