import { Header } from 'antd/es/layout/layout';
import './App.css';
import { Button, Col, Layout, Modal, Row, Typography } from 'antd';
import Game from './Game';
import { useState } from 'react';
import { useAppSelector } from './redux/hook';

function App() {
  const list = useAppSelector((state) => state.score.highScores)
  const [open, setOpen] = useState(false);
  return (
    <Layout className='h-screen'>
      <Modal
        open={open}
        title='High Scores'
        footer={null}
        onCancel={() => setOpen(false)}
        >
        <div className='mt-5'>        
          {list.map((item) => (
            item.name ? 
            <Row className='mb-5'>
              <Col span={12}><Typography>{item.name}</Typography></Col>
              <Col span={12}><Typography className='text-right'>{item.score}</Typography></Col>
            </Row>
            :
            <></>
          ))}
        </div>
      </Modal>
      <Header className='py-3 flex'>
        <Typography 
          className='text-white text-[20px]'>
          Memory Game
        </Typography>
        <Typography onClick={() => setOpen(true)} className='text-white flex items-center ml-10 cursor-pointer'>
          High Scores
        </Typography>
      </Header>
      <Game />
    </Layout>
  );
}

export default App;
