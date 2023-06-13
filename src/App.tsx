import { URLFinderUseCase } from '../application/URLFinderUseCase'
import { HTMLParserCheerioImpl } from '../infrastructure/HTMLParserCheerioImpl'
import { HTMLFromUrlFetchImpl } from '../infrastructure/HTMLFromURLFetchImpl'

const urlFinder = new URLFinderUseCase(
  new HTMLFromUrlFetchImpl(),
  new HTMLParserCheerioImpl()
)

const foo = await urlFinder.execute('https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge')
console.log(foo)
function App() {

  return (
    <>
      {foo}
    </>
  )
}

export default App
