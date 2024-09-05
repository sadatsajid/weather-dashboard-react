import { useRoutes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import Providers from './providers';
import routes from './router';

function App() {
  const content = useRoutes(routes);

  return (
    <Providers>
      <CssBaseline />
      {content}
    </Providers>
  );
}
export default App;