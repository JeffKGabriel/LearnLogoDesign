export default function counter(state = { count: 0, amount:1 }, action) {
  const count = state.count
  const amount = state.amount
  switch (action.type) {
    case 'increase':
      return { count: count + action.amount }
    case 'decrease':
      return { count: count - action.amount }
    default:
      return state
  }
}
