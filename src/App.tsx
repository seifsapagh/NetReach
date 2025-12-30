import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { HomePage, StorePage, NotFoundPage, CheckoutPage } from './pages';
import { ToastProvider } from './utils/providers/ToastProvider';
import { Navigation, Footer } from './components';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <Router>
          <ScrollToTop />

          <div className="min-h-screen bg-[#050508] text-white selection:bg-purple-500/30">
            <Navigation />

            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/store">
                  <Route index element={<StorePage />} />
                  <Route path="checkout" element={<CheckoutPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </ToastProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
