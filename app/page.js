import LoadingAnim from '@components/LoadingAnim';
import { CursorAnim } from '@components/CursorAnim/CursorAnim'

import "./index.scss"

function App() {
    return (
      <div>
        <LoadingAnim />
        <CursorAnim />
      </div>
    );
}

export default App;
