import axios from 'axios'
import {InputState} from '../enum/InputState'

export function isValidYouTubeChannelId(id): InputState {
  const pattern = /^UC[a-zA-Z0-9_-]{22}$/
  return pattern.test(id) ? InputState.VALID : InputState.INVALID
}

export function isValidTwitterAccountUrl(url): InputState {
  const pattern = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}$/
  return pattern.test(url) ? InputState.VALID : InputState.INVALID
}
