import { ChangeEventHandler } from 'react'

export type SelectChangeEventHandler = ChangeEventHandler<HTMLSelectElement>

export function isChildNode(
  parent?: Node | null,
  child?: Node | null
): boolean {
  if (parent == null || child == null) {
    return false
  }
  let target: Node | null = child
  while (target != null) {
    target = target.parentNode
    if (parent === target) {
      return true
    }
  }
  return false
}

function createCustomEventHelper(
  name: string
): {
  dispatch: () => void
  listen: (handler: (event: CustomEvent) => void) => void
  unlisten: (handler: (event: CustomEvent) => void) => void
}
function createCustomEventHelper<D = any>(
  name: string
): {
  dispatch: (detail: D) => void
  listen: (handler: (event: CustomEvent<D>) => void) => void
  unlisten: (handler: (event: CustomEvent<D>) => void) => void
}
function createCustomEventHelper<D = any>(name: string) {
  return {
    dispatch(detail: D) {
      window.dispatchEvent(new CustomEvent(name, { detail }))
    },
    listen(handler: (event: CustomEvent<D>) => void) {
      window.addEventListener(name, handler as (event: Event) => void)
    },
    unlisten(handler: (event: CustomEvent<D>) => void) {
      window.removeEventListener(name, handler as (event: Event) => void)
    },
  }
}

const NoteDetailFocusTitleInputEventName = 'NoteDetail:focusTitleInput'
export const {
  dispatch: dispatchNoteDetailFocusTitleInputEvent,
  listen: listenNoteDetailFocusTitleInputEvent,
  unlisten: unlistenNoteDetailFocusTitleInputEvent,
} = createCustomEventHelper(NoteDetailFocusTitleInputEventName)

const BoostHubLoginRequestEventName = 'BoostHub:loginRequest'
export const {
  dispatch: dispatchBoostHubLoginRequestEvent,
  listen: listenBoostHubLoginRequestEvent,
  unlisten: unlistenBoostHubLoginRequestEvent,
} = createCustomEventHelper(BoostHubLoginRequestEventName)

const BoostHubLoginEventName = 'BoostHub:login'
interface BoostHubLoginEventDetail {
  code: string
}
export type BoostHubLoginEvent = CustomEvent<BoostHubLoginEventDetail>
export const {
  dispatch: dispatchBoostHubLoginEvent,
  listen: listenBoostHubLoginEvent,
  unlisten: unlistenBoostHubLoginEvent,
} = createCustomEventHelper<BoostHubLoginEventDetail>(BoostHubLoginEventName)

const BoostHubNavigateRequestEventName = 'BoostHub:navigateRequest'
interface BoostHubNavigateRequestEventDetail {
  url: string
}
export type BoostHubNavigateRequestEvent = CustomEvent<
  BoostHubNavigateRequestEventDetail
>
export const {
  dispatch: dispatchBoostHubNavigateRequestEvent,
  listen: listenBoostHubNavigateRequestEvent,
  unlisten: unlistenBoostHubNavigateRequestEvent,
} = createCustomEventHelper<BoostHubNavigateRequestEventDetail>(
  BoostHubNavigateRequestEventName
)
const BoostHubTeamCreateEventName = 'BoostHub:teamCreate'
interface BoostHubTeamCreateEventDetail {
  team: {
    id: string
    name: string
    domain: string
    icon?: {
      location: string
    }
  }
}
export type BoostHubTeamCreateEvent = CustomEvent<BoostHubTeamCreateEventDetail>
export const {
  dispatch: dispatchBoostHubTeamCreateEvent,
  listen: listenBoostHubTeamCreateEvent,
  unlisten: unlistenBoostHubTeamCreateEvent,
} = createCustomEventHelper<BoostHubTeamCreateEventDetail>(
  BoostHubTeamCreateEventName
)

const BoostHubTeamUpdateEventName = 'BoostHub:teamUpdate'
interface BoostHubTeamUpdateEventDetail {
  team: {
    id: string
    name: string
    domain: string
    icon?: {
      location: string
    }
  }
}
export type BoostHubTeamUpdateEvent = CustomEvent<BoostHubTeamUpdateEventDetail>
export const {
  dispatch: dispatchBoostHubTeamUpdateEvent,
  listen: listenBoostHubTeamUpdateEvent,
  unlisten: unlistenBoostHubTeamUpdateEvent,
} = createCustomEventHelper<BoostHubTeamUpdateEventDetail>(
  BoostHubTeamUpdateEventName
)

const BoostHubTeamDeleteEventName = 'BoostHub:teamDelete'
interface BoostHubTeamDeleteEventDetail {
  team: {
    id: string
    name: string
    domain: string
    icon?: {
      location: string
    }
  }
}
export type BoostHubTeamDeleteEvent = CustomEvent<BoostHubTeamDeleteEventDetail>
export const {
  dispatch: dispatchBoostHubTeamDeleteEvent,
  listen: listenBoostHubTeamDeleteEvent,
  unlisten: unlistenBoostHubTeamDeleteEvent,
} = createCustomEventHelper<BoostHubTeamDeleteEventDetail>(
  BoostHubTeamDeleteEventName
)

const BoostHubAccountDeleteEventName = 'BoostHub:accountDelete'
export type BoostHubAccountDeleteEvent = CustomEvent
export const {
  dispatch: dispatchBoostHubAccountDeleteEvent,
  listen: listenBoostHubAccountDeleteEvent,
  unlisten: unlistenBoostHubAccountDeleteEvent,
} = createCustomEventHelper(BoostHubAccountDeleteEventName)

const BoostHubToggleSettingsEventName = 'BoostHub:toggleSettings'
export type BoostHubToggleSettingsEvent = CustomEvent
export const {
  dispatch: dispatchBoostHubToggleSettingsEvent,
  listen: listenBoostHubToggleSettingsEvent,
  unlisten: unlistenBoostHubToggleSettingsEvent,
} = createCustomEventHelper(BoostHubToggleSettingsEventName)
