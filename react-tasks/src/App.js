import { Route, Routes } from "react-router-dom";
import Task1 from "./page/Task1/Task1";
import Task2 from "./page/Task2/Task2";
import Task3 from "./page/Task3/Task3";
import Task4 from "./page/Task4/Task4";
import Task5 from "./page/Task5/Task5";
import Task6 from "./page/Task6/Task6";
import Home from "./page/Home/Home";
import Task7 from "./page/Task7/Task7";
import Task8 from "./page/Task8/Task8";
import Task9 from "./page/Task9/Task9";
import Task10 from "./page/Task10/Task10";
import Task11 from "./page/Task11/Task11";
import Task12 from "./page/Task12/Task12";
import Task14 from "./page/Task14/Task14";
import Task15 from "./page/Task15/Task15";
import Task16 from "./page/Task16/Task16";
import Task17 from "./page/Task17/Task17";
import Task18 from "./page/Task18/Task18";
import Task20 from "./page/Task20/Task20";
import Task21 from "./page/Task21/Task21";
import Task22 from "./page/Task22/Task22";
import Task23 from "./page/Task23/Task23";
import Task24 from "./page/Task24/Task24";
import Task25 from "./page/Task25/Task25";
import Task26 from "./page/Task26/Task26";
import Task27 from "./page/Task27/Task27";
import Task28 from "./page/Task28/Task28";
import Task33 from "./page/Task33/Task33";
import Task34 from "./page/Task34/Task34";
import Task35 from "./page/Task35/Task35";
import Task36 from "./page/Task36/Task36";
import Task37 from "./page/Task37/Task37";
import Task38 from "./page/Task38/Task38";
import Task39 from "./page/Task39/Task39";
import Task40 from "./page/Task40/Task40";
import Task41 from "./page/Task41/Task41";
import Task42 from "./page/Task42/Task42";
import Task43 from './page/Task43/Task43';
import Task44 from './page/Task44/Task44';
import Task45 from './page/Task45/Task45';
import Task46 from './page/Task46/Task46';
import Task47 from './page/Task47/Task47';
import Task48 from './page/Task48/Task48';
import Task49 from './page/Task49/Task49';
import Task50 from './page/Task50/Task50';
import Task51 from './page/Task51/Task51';
import Task52 from './page/Task52/Task52';
import Task53 from './page/Task53/Task53';
import Task54 from './page/Task54/Task54';
import Task55 from './page/Task55/Task55';
import Task56 from './page/Task56/Task56';


import Task72 from './page/Task72/Task72';
import Task73 from './page/Task73/Task73';
import Task74 from './page/Task74/Task74';
import Task75 from './page/Task75/Task75';
import Task76 from './page/Task76/Task76';
import Task77 from './page/Task77/Task77';
import Task78 from './page/Task78/Task78';
import Task79 from './page/Task79/Task79';
import Task80 from './page/Task80/Task80';
import Task81 from './page/Task81/Task81';
import { Task78Context,Task79Context,Task80Context } from "./Context/Context";
import { useState } from "react";

function App() {
  const obj = {
    id: 1,
    name: 'Darya',
    surname: 'Drozd',
    email: 'drozd.d.rus@gmail.com'
  }

const [language, setLanguage] = useState('ru')
const o = {language:language, setLanguage}

const objWeather = {
  temperature: '25',
  humidity: '80%',
  windSpeed: '50'
}

  return (
    <div>
      <Task78Context.Provider value={obj}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/task1" element={<Task1></Task1>}></Route>
          <Route path="/task2" element={<Task2></Task2>}></Route>
          <Route path="/task3" element={<Task3></Task3>}></Route>
          <Route path="/task4" element={<Task4></Task4>}></Route>
          <Route path="/task5" element={<Task5></Task5>}></Route>
          <Route path="/task6" element={<Task6></Task6>}></Route>
          <Route path="/task7" element={<Task7></Task7>}></Route>
          <Route path="/task8" element={<Task8></Task8>}></Route>
          <Route path="/task9" element={<Task9></Task9>}></Route>
          <Route path="/task10" element={<Task10></Task10>}></Route>
          <Route path="/task11" element={<Task11></Task11>}></Route>
          <Route path="/task12" element={<Task12></Task12>}></Route>
          <Route path="/task14" element={<Task14></Task14>}></Route>
          <Route path="/task15" element={<Task15></Task15>}></Route>
          <Route path="/task16" element={<Task16></Task16>}></Route>
          <Route path="/task17" element={<Task17></Task17>}></Route>
          <Route path="/task18" element={<Task18></Task18>}></Route>
          <Route path="/task20" element={<Task20></Task20>}></Route>
          <Route path="/task21" element={<Task21></Task21>}></Route>
          <Route path="/task22" element={<Task22></Task22>}></Route>
          <Route path="/task23" element={<Task23></Task23>}></Route>
          <Route path="/task24" element={<Task24></Task24>}></Route>
          <Route path="/task25" element={<Task25></Task25>}></Route>
          <Route path="/task26" element={<Task26></Task26>}></Route>
          <Route path="/task27" element={<Task27></Task27>}></Route>
          <Route path="/task28" element={<Task28></Task28>}></Route>
          <Route path="/task33" element={<Task33></Task33>}></Route>
          <Route path="/task34" element={<Task34></Task34>}></Route>
          <Route path="/task35" element={<Task35></Task35>}></Route>
          <Route path="/task36" element={<Task36></Task36>}></Route>
          <Route path="/task37" element={<Task37></Task37>}></Route>
          <Route path="/task38" element={<Task38></Task38>}></Route>
          <Route path="/task39" element={<Task39></Task39>}></Route>
          <Route path="/task40" element={<Task40></Task40>}></Route>
          <Route path="/task41" element={<Task41></Task41>}></Route>
          <Route path="/task42" element={<Task42></Task42>}></Route>
          <Route path="/task43" element={<Task43></Task43>}></Route>
          <Route path="/task44" element={<Task44></Task44>}></Route>
          <Route path="/task45" element={<Task45></Task45>}></Route>
          <Route path="/task46" element={<Task46></Task46>}></Route>
          <Route path="/task47" element={<Task47></Task47>}></Route>
          <Route path="/task48" element={<Task48></Task48>}></Route>
          <Route path="/task49" element={<Task49></Task49>}></Route>
          <Route path="/task50" element={<Task50></Task50>}></Route>
          <Route path="/task51" element={<Task51></Task51>}></Route>
          <Route path="/task52" element={<Task52></Task52>}></Route>

          <Route path="/task72" element={<Task72></Task72>}></Route>
          <Route path="/task73" element={<Task73></Task73>}></Route>
          <Route path="/task74" element={<Task74></Task74>}></Route>
          <Route path="/task75" element={<Task75></Task75>}></Route>
          <Route path="/task76" element={<Task76></Task76>}></Route>
          <Route path="/task77" element={<Task77></Task77>}></Route>
          <Route path="/task78" element={<Task78></Task78>}></Route>
          <Route path="/task81" element={<Task81></Task81>}></Route>
        </Routes>
      </Task78Context.Provider>

      <Task79Context.Provider value={o}>
        <Routes>
          <Route path="/task79" element={<Task79></Task79>}></Route>
        </Routes>
      </Task79Context.Provider>

      <Task80Context.Provider value={objWeather}>
        <Routes>
          <Route path="/task80" element={<Task80></Task80>}></Route>
        </Routes>
      </Task80Context.Provider>


      
    </div>

  );
}

export default App;
