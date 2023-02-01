import {writable, get} from 'svelte/store'

let message: string = null
export const showAlert = writable(message)
