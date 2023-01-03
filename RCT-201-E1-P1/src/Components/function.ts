export function setItem<v>(key: string, value: v) {
    localStorage.setItem(key,JSON.stringify(value))
}

export function getItem<T>(key:string):T{
    return JSON.parse(localStorage.getItem(key)as string)|| []
}