import { IItem } from "@local-types/IItem";



export const getItems = (): IItem[] | undefined => {
    try{

        let storedItems = window.localStorage.getItem("items");
        if (!storedItems){
            storedItems = '[]'
        }

        return JSON.parse(storedItems).map((item: any) => ({...item, date: new Date(item.date)}));
    }catch{}
    return undefined
}

export const saveItems = (items: IItem[]) => {
    window.localStorage.setItem("items", JSON.stringify(items));
}

export const createItem = (item: IItem): string | undefined => {
    let items = getItems();
    if(!items) return undefined

    items.push(item);
    saveItems(items);
    return item.id
}
export const getItem = (id: string): IItem | undefined => {
    let items = getItems();
    if(!items) return undefined

    return items.find(item => item.id == id)
}



export const updateItem = (id: string, item: IItem): true | undefined => {
    let items = getItems();
    if(!items) return undefined

    let idx = items.findIndex(item => item.id === id);

    items[idx] = item;

    saveItems(items);
    return true

}