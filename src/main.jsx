import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Team from './components/page/team/Team';
import Dashboard from './components/page/dashboard/Dashboard';
import Geography from './components/page/geography/Geography';
import Form from './components/page/form/Form';
import Invoices from './components/page/invoices/Invoices';
import LineChart from './components/page/line/LineChart';
// @ts-ignore
import PieChart from './components/page/pie/PieChart';
import Contacts from './components/page/contacts/Contacts';
import Faq from './components/page/faq/Faq';
import Calendar from './components/page/calendar/Calendar';
import BarChart from './components/page/bar/BarChart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />}/>
      <Route path="team" element={<Team />}/>
      <Route path="bar" element={<BarChart />}/>
      <Route path="calendar" element={<Calendar />}/>
      <Route path="faq" element={<Faq />}/>
      <Route path="form" element={<Form />}/>
      <Route path="geography" element={<Geography />}/>
      <Route path="contacts" element={<Contacts />}/>
      <Route path="invoices" element={<Invoices />}/>
      <Route path="line" element={<LineChart />}/>
      <Route path="pie" element={<PieChart />}/>
      <Route path="*" element={<div>Not Found</div>}/>
   
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
