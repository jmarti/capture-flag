import { CheerioAPI, load } from 'cheerio'
import { HTMLParser } from '../domain/HTMLParser'

export class HTMLParserCheerioImpl implements HTMLParser {
    private $!: CheerioAPI

    loadHTML(HTMLString: string) {
        this.$ = load(HTMLString)
    }

    getValuesInHTMLNodes(selector: string, prop: string): string {
        let values = ''
        const elements = this.$(selector)
        elements.each((_, el) => {
            values += this.$(el).prop(prop)
        })
        return values
    }
}