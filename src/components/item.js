export default function Item({item, onHandlePinned, onHandleSelectNote, index}) {
    console.log(item);

    const handlePinned = () => {
        onHandlePinned(item, index);
    };

    const handleClick = (item, e) => {
        onHandleSelectNote(item, e);
    };
    return (
        
        <div key={item.id} className='note' onClick={(e) => handleClick()}>
            <div>
                {item.title === '' ? '[Sin titulo]' : item.title.substring(0, 20)}
            </div>
            <div>
                <button className='pinButton' onClick={() => handlePinned(item, index)}>{item.pinned ? 'Pinned' : 'Pin'}</button>
            </div>
        </div>
    );
}