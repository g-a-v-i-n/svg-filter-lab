export function byOrdering(a: string, b: string, ordering: string[]) {
    return ordering.indexOf(a) - ordering.indexOf(b);
}