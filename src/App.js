import './App.css';
import { useReactMediaRecorder } from 'react-media-recorder';

function App() {
    const {status, startRecording, stopRecording, mediaBlobUrl} = useReactMediaRecorder({screen:true})
    
    return (
        <div className='recorder'>
            <video className='screen' src={mediaBlobUrl} autoPlay controls loop></video>
            <div className='controls'>
                <button className='button' onClick={startRecording}>Start Recording</button>
                <button className='button' onClick={stopRecording}>Stop Recording</button>
            </div>
        </div>
    )
}

export default App;
