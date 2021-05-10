import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './components/mensaje';
import Panel from './components/panel';
import Menu from './components/menu';
import List from './components/list';
import Item from './components/item';
import Editor from './components/editor';
import Preview from './components/preview';

function App() {

    // const [nombre, setNombre] = useState('Alejandro');
    const [items, setiItems] = useState([
        {
            id: 0,
            title: 'Mi primer nota',
            text: '# Hola a todos',
            pinned: false,
            created: Date().now
        },
        {
            id: 1,
            title: 'Mi segunda nota',
            text: '# Hola a todos',
            pinned: true,
            created: Date().now
        },

    ]);

    return (
        <div className='App container2'>
            <Panel>
                <Menu />
                <List>
                    {
                        items.map((item, i) => {
                            return <Item key={item.id} item={item} />
                        })
                    }
                </List>
            </Panel>
            <>
                <Editor />
                <Preview/>
            </>
        </div>
    );
}

export default App;
