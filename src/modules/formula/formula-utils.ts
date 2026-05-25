export function removeComments(formula: string): string {
    return formula
        .split("\n")
        .map((line) => {
            const commentIndex = line.indexOf("//");
            return commentIndex !== -1 ? line.substring(0, commentIndex) : line;
        })
        .join("\n")
        .trim();
}
