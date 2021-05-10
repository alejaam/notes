export default function Menu() {
    const handleClick = (e) => {
    }
    return (
        <div className='menu'>
            <input className='form search' placeholder='Buscar...' />
            <button className='btn' onClick={handleClick}>+ Nueva nota</button>
        </div>
    );
}