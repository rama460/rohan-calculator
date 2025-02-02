import { Item } from "../../components/static/items";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";

export const reduce = (items: (Item | null)[]) => {
    const reduced: any = {}
    BuiltinOptionKeys.forEach((name: string) => {
        reduced[name] = items.map(item => item?.baseOptions[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            const v = Number(value) + acc;
            console.log(name, v)
            return v
        }, 0) + items.map(item => item?.additionalOptions[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            return Number(value) + acc;
        }, 0);
    })
    return reduced
}    