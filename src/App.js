import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './components/mensaje';
import Panel from './components/panel';
import Menu from './components/menu';

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
                <div className='list'>
                    {
                        items.map((item, i) => {
                            return <div key={item.id} className='note'>
                                <div>
                                    {item.title === '' ? '[Sin titulo]' : item.title.substring(0, 20)}
                                </div>
                                <div>
                                    <button className='pinButton'>{item.pinned ? 'Pinned' : 'Pin'}</button>
                                </div>
                            </div>
                        })
                    }
                </div>
            </Panel>
            <div className='editor'>
                <div>
                    <input className='title' />
                </div>
                <div className='editor-textarea'>
                    <textarea className='content'>
                    </textarea>
                </div>
            </div>
            <div className='preview'>

            </div>
        </div>
    );
}

export default App;
