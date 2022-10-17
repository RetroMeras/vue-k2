import { IItem } from "@local-types/IItem";
import { createItem, deleteItem, getItems, updateItem } from "../utils/db";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

export interface State{
    items: IItem[]
}

export const key: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
    state(){
        return {
            items: getItems() || []
        }
    },
    mutations: {
        push(state, item: IItem){
            createItem(item)
            state.items.push(item)
        },
        update(state, {id, item}: {id: string, item: IItem}){
            const idx = state.items.findIndex(item => item.id === id)
            state.items[idx] = item
            updateItem(id, item);
        },
        delete(state, id: string) {
            const idx = state.items.findIndex((item: IItem) => item.id === id);

            state.items.splice(idx,1);
            deleteItem(id);
        }
    }
})


export default store