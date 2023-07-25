import Example01 from './01_basic';
import Example02 from './02_props';
import Example03 from './03_event';
// import Example04 from './04_useState';
// import Example05 from './05_ConditionalRendering';
// import Example06 from './06_styleClassBind';
// import Example07 from './07_ListRendering';
// import Example08 from './08_useEffect';
// import Example09 from './09_useEffect_Closure';
// import Example10 from './10_fetch_api';
// import Example11 from './11_useRef';
// import Example12 from './12_Form';
// import Example13 from './13_React_memo';
// import Example14 from './14_useMemo';
// import Example15 from './15_useCallback';
// import Example16 from './16_customHooks';
// import Example17 from './17_ComponentCommunication';
// import Example18 from './18_TodoForm';
// import Example19 from './19_noJSX';
// import Example20 from './20_render';
// import Example21 from './21_JSXSpreadAttributes';
// import Example22 from './22_ErrorBoundary';

const App = () => {
  // const ExampleComponent = Example01;
  const ExampleComponent = Example03;
  return (
    <div className="container">
      <ExampleComponent />
    </div>
  );
};

export default App;
