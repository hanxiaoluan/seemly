let cbs: Function[] = []

function flushCallbacks (): void {
  cbs.forEach(cb => cb())
  cbs = []
}

export function beforeNextFrame (cb: Function): void {
  cbs.push(cb) === 1 && requestAnimationFrame(flushCallbacks)
}
