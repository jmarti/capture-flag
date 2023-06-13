import { HTMLFromUrl } from '../domain/HTMLFromUrl'

export class HTMLFromUrlFetchImpl implements HTMLFromUrl {
    async getHTMLfromURL(url: string) {
        const res = await fetch(url)
        return res.text()
    }
}