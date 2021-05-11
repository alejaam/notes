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
    const [actualIndex, setActualIndex] = useState(-1);
    const [copyItems, setcopyItems] = useState();

    const handleNew = () => {
        const note = {
            id: uuid(),
            title: 'acaca',
            text: 'sdfscacadfsdf',
            pinned: false,
            created: Date().now
        };

        setiItems([note, ...items]);
    };

    const handlePinned = (item, i) => {
        setActualIndex(i);
        let iud = item.id;
        let notes = [...items];
        notes[i].pinned = !notes[i].pinned;

        let res = getOrderedNotes(notes);

        setiItems(res);
        let index = res.findIndex(x => x.id == i)
    };

    const getOrderedNotes = (arr) => {
        let items = [...arr];
        let pinned = items.filter(x => x.pinned === true);
        let rest = items.filter(x => x.pinned === false);

        pinned = sortByDate(pinned, true);
        rest = sortByDate(rest, true);

        return [...pinned, ...rest]

    };

    const sortByDate = (arr, asc = false) => {
        if (asc) return arr.sort((a, b) => new Date(b.created) - new Date(a.created) && b.pinned);
        return arr.sort((a, b) => new Date(a.created) - new Date(b.created) && b.pinned);
    }
    const handleSelectNote = (item, e) => {
        if (!e.target.classList.contains('note')) return;
        const index = items.findIndex(x => x == item);
        setActualIndex(index);
    };

    const onChangeTitle = (e) => {
        const title = e.target.value;
        let notes = [...items];
        notes[actualIndex].title = title;
        setiItems(notes);
    }
    const onChangeText = (e) => {
        const text = e.target.value;
        let notes = [...items];
        notes[actualIndex].text = text;
        setiItems(notes);
    }
    const renderEditorAndPreviewUI = (items) => {
        return (
            <>
                <Editor item={items[actualIndex]} onChangeTitle={onChangeTitle} onChangeText={onChangeText} />
                <Preview text={items[actualIndex].text} />
            </>

        );
    }

    return (
        <div className='App container2'>
            <Panel>
                <Menu onNew={handleNew} />
                <List>
                    {
                        items.map((item, i) => {
                            return <Item key={item.id} actualIndex={actualIndex} item={item} index={i} onHandlePinned={handlePinned} onHandleSelectNote={handleSelectNote} />
                        })
                    }
                </List>
            </Panel>
            <>
                {
                    (actualIndex >= 0) ? renderEditorAndPreviewUI(items) : ''
                }
            </>
        </div>
    );
}

export default App;
