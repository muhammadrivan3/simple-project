import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './routes'
import './i18n'; // Mengimpor konfigurasi i18n

import DonateButton from './components/DonateButton'
import ToggleThemeFloating from './components/ThemeToogle'
function App() {
  return (
    <Router>
      <ToggleThemeFloating/>
      <DonateButton/>
      <RoutesIndex />
    </Router>
  )
}

export default App
