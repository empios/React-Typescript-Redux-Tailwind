import React from 'react';
import List from './components/List/List'

type AppProps = {
};

const App: React.FC<AppProps> = ():JSX.Element => (
    <div className="App ">
        <div className='container'>
            <List/>
        </div>
    </div>
  )

export default App;
