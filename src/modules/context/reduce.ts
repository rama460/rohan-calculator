import { BuiltinOptionKeys, BuiltinOptionKeyType } from "../../components/static/options";
export const reduceOptions = (options: { [key in BuiltinOptionKeyType]?: number }[]): { [key in BuiltinOptionKeyType]: number } => {
    const reduced: any = {}
    BuiltinOptionKeys.filter((name: string) => (name !== 'none')).forEach((name: string) => {
        reduced[name] = options.map(option => option[name as BuiltinOptionKeyType] ?? 0).reduce((acc, value: number) => {
            return Number(value) + acc;
        }, 0)

    })
    return reduced
}
