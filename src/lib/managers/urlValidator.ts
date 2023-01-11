import { LinkState } from "../enum/LinkState";

export function isValidYouTubeChannelUrl(url) : LinkState {
  const pattern = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(channel\/|@))([\w-]{1,})(?:\S+)?$/;
  return pattern.test(url) ? LinkState.VALID : LinkState.INVALID;
}

export function isValidTwitterAccountUrl(url) : LinkState {
  const pattern = /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/[a-zA-Z0-9_]{1,15}$/;
  return pattern.test(url) ? LinkState.VALID : LinkState.INVALID;
}