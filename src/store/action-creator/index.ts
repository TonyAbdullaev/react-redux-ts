import * as UserActionCreator from './user'
import * as TodoActionCreator from './todos'

export default {
    ...TodoActionCreator,
    ...UserActionCreator
}