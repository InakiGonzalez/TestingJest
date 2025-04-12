interface Callback<T> {
    (item: T): void;
}

export function forEach<T>(items: T[], callback: Callback<T>): void {
    for (const item of items) {
        callback(item);
    }
}
  