export default function Menu({ onNew }) {
    const handleClick = (e) => {
        onNew();
    }
    return (
        <div className='menu'>
            <input className='form search' placeholder='Buscar...' />
            <button className='btn' onClick={handleClick}>+ Nueva nota</button>
        </div>
    );
}