export interface HTMLParser {
    getValuesInHTMLNodes(selector: string, prop: string): string
    loadHTML(HTMLString: string): void
}
