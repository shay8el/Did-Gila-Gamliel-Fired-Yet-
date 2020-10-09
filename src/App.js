import React, { useEffect, useState } from 'react'
import header from './header.png';
import './App.scss';
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    counterInit()
  });
  const counterInit = () => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    const kipur = "Sep 27, 2020 00:00:00"
    const counter = new Date(kipur).getTime()
    const x = setInterval(function() {
      const now = new Date().getTime()
      const distance = now - counter

      setDays(Math.floor(distance / (day)))
      setHours(Math.floor((distance % (day)) / (hour)))
      setMinutes(Math.floor((distance % (hour)) / (minute)))
      setSeconds(Math.floor((distance % (minute)) / second))

      //seconds
    }, 0)
  }
  const renderTable = () => <TableContainer component={Paper}>
    <Table>
      <TableBody>
        <TableRow key='1'>
          <TableCell align="right"><b>
            לפני יום כיפור
          </b></TableCell>
          <TableCell align="right">נסעה מעל 100 ק"מ מביתה בתל אביב לטבריה (ההגבלה על שאר תושבי ישראל – קילומטר אחד)</TableCell>
        </TableRow>
        <TableRow key='2'>
          <TableCell align="right"><b>יום כיפור</b></TableCell>
          <TableCell align="right">נדבקה בנגיף הקורונה במהלך תפילות יום הכיפורים בבית כנסת (ביחד עם עוד יותר מ-20 מתפללים)</TableCell>
        </TableRow>
        <TableRow key='3'>
          <TableCell align="right"><b>ראשון, אחרי חצות</b></TableCell>
          <TableCell align="right">מודיעה ברשתות החברתיות כי נדבקה בקורונה</TableCell>
        </TableRow>
        <TableRow key='4'>
          <TableCell align="right"><b>ראשון בבוקר</b></TableCell>
          <TableCell align="right">לא ענתה לחוקרים האפידמיולוגים ממשרד הבריאות</TableCell>
        </TableRow>
        <TableRow key='5'>
          <TableCell align="right"><b>ראשון בבוקר</b></TableCell>
          <TableCell align="right">לא ענתה לחוקרים האפידמיולוגים ממשרד הבריאות</TableCell>
        </TableRow>
        <TableRow key='6'>
          <TableCell align="right"><b>ראשון, 15:30</b></TableCell>
          <TableCell align="right">
            <b>
              שיקרה למשרד הבריאות&nbsp;
            </b>
            בחקירה האפידמיולוגית וטענה כי עבדה בירושלים ופתח תקווה וכנראה נדבקה מנהגה</TableCell>
        </TableRow>
        <TableRow key='7'>
          <TableCell align="right"><b>ראשון, 19:22</b></TableCell>
          <TableCell align="right">"נזכרה" שהייתה בבית כנסת משפחתית (לא מוסיפה כי הייתה בטבריה, ועם עוד אנשים)</TableCell>
        </TableRow>
        <TableRow key='8'>
          <TableCell align="right"><b>ראשון, ערב</b></TableCell>
          <TableCell align="right">בעקבות פרסום הפרשה בחדשות "כאן", לא עונה למשרד הביראות שמחפש אותה לבירורים</TableCell>
        </TableRow>
        <TableRow key='9'>
          <TableCell align="right"><b>שני בבוקר</b></TableCell>
          <TableCell align="right">עונה למשרד הבריאות ומודה שהייתה בתפילה בטבריה, בניגוד להנחיות</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
  const counter = () => <div className="container">

      <h1 id="headline">עברו כבר:</h1>
      <div className="countdown">
        <ul>
          <Paper className='cardNumber'>
          <li><span id="seconds">
            {seconds}</span>שניות</li>
          </Paper>
          <Paper className='cardNumber'>
          <li><span id="minutes">{minutes}</span>דקות</li>
          </Paper>
          <Paper className='cardNumber'>
          <li><span id="hours">{hours}</span>שעות</li>
          </Paper>
          <Paper className='cardNumber'>
          <li><span id="days">{days}</span>ימים</li>
          </Paper>
        </ul>
      </div>
    <h1 id="headline">מאז שהשרה גילה גמליאל:</h1>
  </div>

  return (
    <div className="App">
      <div className="flexContainer">
        <div className="main item">
          <img className='header' src={header}/>
          <div className="answer">לא.</div>
        </div>
        <div className="counterAndFacts item">
          {counter()}
          {renderTable()}
        </div>
      </div>
    </div>
  );
}

export default App;
