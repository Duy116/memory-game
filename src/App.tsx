import { Content, Header } from 'antd/es/layout/layout';
import './App.css';
import { Flex, Layout, Typography } from 'antd';
import Game from './Game';

function App() {
  return (
    <Layout className='h-screen'>
      <Header className='py-3'>
        <Typography 
          className='text-white text-[20px]'>
          Memory Game
        </Typography>
      </Header>
      <Game />
    </Layout>
  );
}

export default App;
