export default function Editor({ children }) {
    return (
        <div className='editor'>
            <div>
                <input className='title' />
            </div>
            <div className='editor-textarea'>
                <textarea className='content'>
                </textarea>
            </div>
        </div>
    );
}