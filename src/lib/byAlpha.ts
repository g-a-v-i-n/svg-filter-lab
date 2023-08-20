export function byAlpha(a: string, b: string) {
    if (a[0] < b[0]) return -1
    if (a[0] > b[0]) return 1
    return 0
}