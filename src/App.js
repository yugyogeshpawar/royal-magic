import { useSelector } from 'react-redux';
import useAuth from './hooks/useAuth';
import useAdminAuth from './hooks/useAdminAuth';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';
import LoadingScreen from 'utils/LoadingScreen';
// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = () => {
  const { isInitialized } = useAuth();
  const { isAdminAuthenticated } = useAdminAuth();
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>{isAdminAuthenticated || isInitialized ? <Routes /> : <LoadingScreen />}</NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
