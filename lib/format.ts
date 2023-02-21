
export function cell(width: number, item: string | number) : string {
    return item.toString().padStart(width);
}

export function row(cellWidth: number, ...items: string[]): string {
    return "| " + items.map(( item) => {
        return cell(cellWidth, item)
    }).join(" | ") + " |";
}
