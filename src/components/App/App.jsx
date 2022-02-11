import Layout from '../../Layout/Layout';
import Home from '../Home/Home';
import Details from '../Details/Details';

const App = () => {
  return (
    <Layout>
      <div className="container">
        <Home />
        <Details />
      </div>
    </Layout>
  );
};

export default App;
