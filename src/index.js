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
// import Test from './Components/Test';
// import EffectCounterClass from './Components/EffectCounterClass'
// import ClassMouse from './Components/ClassMouse';
// import HookCounterThree from './Components/HookCounterThree';
// import ArrayFour from './Components/ArrayFour';
// import HookCounterOne from './Components/HookCounterOne';
// import Effect1 from './Components/Effect1';
// import IntervalCounter from './Components/IntervalCounter';
import DataFetching from './Components/DataFetching';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateTutorial /> */}
    {/* <ReducerTutorial /> */}
    {/* <EffectTutorial /> */}
    {/* <RefTutorial /> */}
    {/* <LayoutEffectTutorial /> */}
    {/* <HookCounterThree /> */}
    {/* <EffectCounterClass /> */}
    {/* <ArrayFour /> */}
    {/* <IntervalCounter /> */}
    <DataFetching />
  </React.StrictMode>
);
