import { HTMLParser } from '../domain/HTMLParser'
import { HTMLFromUrl } from '../domain/HTMLFromUrl'

export class URLFinderUseCase {
    constructor(
        private HTMLFromURL: HTMLFromUrl,
        private HTMLParser: HTMLParser
    ) { }

    async execute(url: string) {
        const html = await this.HTMLFromURL.getHTMLfromURL(url)
        this.HTMLParser.loadHTML(html)
        return this.HTMLParser.getValuesInHTMLNodes('ul[data-tag*="75"] > li[data-id^="98"] > div[data-class$="35"] > span.value[value]', 'value')
    }
}