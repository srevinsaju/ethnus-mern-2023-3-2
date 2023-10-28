'use client';
import Image from 'next/image'


import { evaluate } from 'mathjs';

import { MouseEventHandler, useState } from 'react'


function Header() {
  return (<div className='display-table mt-3 max-w-prose p-1'>
    <h1 className='mt-6 text-3xl font-medium text-black'>Task 2</h1>
    <table className="mt-3 regid w-full max-w-prose">
      <thead></thead>
      <tbody>
      <tr>
        <td>Registration number</td>
        <td>21BCE5841</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Srevin Saju</td>
      </tr>
      </tbody>
    </table>
    </div>)

}




function Button({ text, type, handleClick }: {text: string, type?: string, handleClick: MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button onClick={handleClick} name={text} className={`font-bold text-xl min-w-full rounded-lg ${ type ? type : 'bg-slate-700' } text-slate-50 p-4 px-5`}>
      {text}
    </button>
  )
}

function Answer({ text, type }: {text: string, type?: string}) {
  
  return (
    <button name={text} className={`h-24 font-bold text-xl min-w-full rounded-lg ${ type ? type : 'bg-slate-700' } text-slate-50 p-4 px-5 text-right`}>
      {text}
    </button>
  )
}


function Calculator() {
 let [text, valueChanged] = useState("");

 let handleClick = (e: any) => {
  valueChanged(text.concat(e.target.name))
 }

 let calculate = (e : any) => {
  valueChanged(evaluate(text).toString())
 }

 let clear = (e: any) => {
  valueChanged('')
 }


  return (<div className='mx-auto mt-3 w-full max-w-prose p-1'>
    <table className='mx-auto'>
      <thead>
        <tr>
          <td colSpan={4}>
            <Answer text={text.toString()} type='bg-slate-900'></Answer>
          </td>
        </tr>
      </thead>
      <tbody>
      <tr>
          <td colSpan={3}><Button  handleClick={clear}  text='AC' type='bg-slate-500'></Button> </td>
          <td ><Button  handleClick={handleClick}  text='/' type='bg-slate-500'></Button> </td>
        </tr>
        <tr>
          <td><Button handleClick={handleClick} text='7'></Button> </td>
          <td><Button  handleClick={handleClick}  text='8'></Button> </td>
          <td><Button  handleClick={handleClick}  text='9'></Button> </td>

          <td><Button  handleClick={handleClick}  text='*' type='bg-slate-500'></Button> </td>
        </tr>
        <tr>
          <td><Button  handleClick={handleClick} text='4'></Button> </td>
          <td><Button handleClick={handleClick}  text='5'></Button> </td>
          <td><Button handleClick={handleClick}  text='6'></Button> </td>

          <td><Button handleClick={handleClick}  text='-' type='bg-slate-500'></Button> </td>
        </tr>
        <tr>
          <td><Button handleClick={handleClick}  text='1'></Button> </td>
          <td><Button handleClick={handleClick}  text='2' ></Button> </td>
          <td><Button handleClick={handleClick}  text='3'></Button> </td>
          <td><Button handleClick={handleClick}  text='+' type='bg-slate-500'></Button> </td>
        </tr>
        <tr>
          <td><Button handleClick={handleClick}  text='0'></Button> </td>
          <td><Button handleClick={handleClick}  text='.' ></Button> </td>
          <td colSpan={2}><Button  handleClick={calculate}  text='=' type='bg-slate-500'></Button> </td>
        </tr>
      </tbody>
    </table>
  </div>)
}



export default function Home() {

  return (
    <main className="w-full">
      <Header />

      <Calculator />
    </main>
  )
}
