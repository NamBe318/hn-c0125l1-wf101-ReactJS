import logo from './logo.svg';
import './App.css';
import DemoOnClickEvent from './example/DemoOnClickEvent';
import DemoOnDoubleClickEvent from './example/DemoOnDoubleClickEvent';
import DemoOnMouseEnterAndOnMouseLeave from './example/DemoOnMouseEnterAndOnMouseLeave';
import DemoFocusAndBlur from './example/DemoFocusAndBlur';
import DemoOnKeyupAndOnKeydown from './example/DemoOnKeyupAndOnKeydown';
import DemoOnSubmit from './example/DemoOnSubmit';
import DemoOnChange from './example/DemoOnChange';
import Parent from './example/component-in-component/Parent';
import Counter from './example/Exercise/bai1/Counter';
import Search from './example/Exercise/bai2/Search';
import Select from './example/Exercise/bai3/Select';

function App() {
  return (
    <div className="App">
      {/* <DemoOnClickEvent/> */}
      {/* <DemoOnDoubleClickEvent/> */}
      {/* <DemoOnMouseEnterAndOnMouseLeave/> */}
      {/* <DemoFocusAndBlur/> */}
      {/* <DemoOnKeyupAndOnKeydown/> */}
      {/* <DemoOnSubmit/> */}
      {/* <DemoOnChange/> */}
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <Search/> */}
      <Select/>
    </div>
  );
}

export default App;
