import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import StateTutorial from './Components/StateTutorial';
// import ReducerTutorial from './Components/ReducerTutorial';
// import EffectTutorial from './Components/EffectTutorial';
// import RefTutorial from './Components/RefTutorial';
// import LayoutEffectTutorial from './Components/LayoutEffectTutorial';
// import Button from './Components/Button';
// import ImperativeHandle from './Components/ImperativeHandle';
import Test from './Components/Test';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateTutorial /> */}
    {/* <ReducerTutorial /> */}
    {/* <EffectTutorial /> */}
    {/* <RefTutorial /> */}
    {/* <LayoutEffectTutorial /> */}
    <Test />
  </React.StrictMode>
);
