import FooterItem from './components/FooterItem/FooterItem';
import Navbar from './components/Navbar/Navbar';
import CheckAuth from './hoc/CheckAuth';
import Routes from './routes/Routes';

const App = () => {
  return (
    <>
      <CheckAuth>
        <Navbar />
        <div className='container'>
          <Routes />
        </div>
        <FooterItem />
      </CheckAuth>
    </>
  );
};

export default App;
