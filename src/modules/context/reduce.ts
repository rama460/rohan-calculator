import { Item } from "../../components/static/items";
import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
import { AppliedSkill } from "../../components/static/skill";

export const reduceEquipments = (items: (Item | null)[]) => {
    const reduced: any = {}
    BuiltinOptionKeys.forEach((name: string) => {
        reduced[name] = items.map(item => item?.baseOptions[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            return Number(value) + acc;
        }, 0) + items.map(item => item?.additionalOptions[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            return Number(value) + acc;
        }, 0);
    })
    return reduced
}

export const reduceSkills = (appliedSkills: AppliedSkill[]) => {
    const reduced: any = {}
    BuiltinOptionKeys.forEach((name: string) => {
        reduced[name] = appliedSkills.map(skill => skill.attributes[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            return Number(value) + acc;
        }, 0)
    })
    return reduced
}