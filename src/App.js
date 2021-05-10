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
import uuid from 'react-uuid';

function App() {

    // const [nombre, setNombre] = useState('Alejandro');
    const [items, setiItems] = useState([]);

    const handleNew = () => {
        const note = {
            id: uuid(),
            title: '',
            text: '',
            pinned: false,
            created: Date().now
        };

        setiItems([...items, note]);
    };

    const handlePinned = () => {

    };

    const handleSelectNote = () => {

    };

    return (
        <div className='App container2'>
            <Panel>
                <Menu onNew={handleNew} />
                <List>
                    {
                        items.map((item, i) => {
                            return <Item key={item.id} item={item} index={i} onHandlePinned={handlePinned} onHandleSelectNote={handleSelectNote} />
                        })
                    }
                </List>
            </Panel>
            <>
                <Editor />
                <Preview />
            </>
        </div>
    );
}

export default App;
