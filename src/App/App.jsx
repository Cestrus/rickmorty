import Layout from '../Layout/Layout';
import Home from '../components/Home/Home';
import Details from '../components/Details/Details';
import Favorites from '../components/Favorites/Favorites';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/" element={<Details />} />
        <Route path="/favorites/" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
