import { AggregatedOptions, OptionMap, OptionSource } from "../character/types";
import { BuiltinOptionKeyType } from "../../static/options";

export const aggregateOptions = (sources: OptionSource[]): AggregatedOptions => {
    return sources.reduce<OptionMap>((acc, source) => {
        Object.entries(source.options).forEach(([key, value]) => {
            if (value === undefined) {
                return;
            }

            const optionKey = key as BuiltinOptionKeyType;
            acc[optionKey] = (acc[optionKey] ?? 0) + value;
        });

        return acc;
    }, {});
};

