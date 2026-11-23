import { I18nProvider } from "./modules/i18n"
import { Router } from "./Router"

const App = () => {
  return (
    <I18nProvider>
      <Router />
    </I18nProvider>
  )
}

export default App