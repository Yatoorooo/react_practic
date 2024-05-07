import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
    return (

        <div className="header">
            <img src={reactLogo} className="logo react" alt="React logo"/>
        </div>

    );
}

function Sidebar() {
    return (

        <div className="sidebar">
            <ul className="ul-sidebar">
                <li className="li-sidebar">Пункт навігації </li>
                <li className="li-sidebar">Пункт навігації </li>
                <li className="li-sidebar">Пункт навігації </li>
            </ul>
        </div>

    );
}

function MainContent() {
    return (

        <div className="main-content">
            <p>React JS — це відкритий JavaScript-фреймворк, а точніше, бібліотекою JavaScript, яка використовується для розробки інтерфейсів користувача. Він був створений компанією Facebook і швидко набув популярності серед розробників з усього світу.<br/> Реакт дозволяє ефективно створювати застосунки з високою продуктивністю і масштабованістю. Одним з ключових концепцій у React JS є компоненти. Вони представляють собою незалежні блоки коду, які відповідають за рендеринг певної частини користувацького інтерфейсу.</p>
        </div>

    );
}
function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
      setCount((count) => count + 1)
  }
  return (
      <>


          {/*      </div>*/}
          {/*  </header>*/}
          {/*  /!*  <header>*!/*/}
          {/*  /!*      <div>*!/*/}
          {/*  /!*          <a href="https://vitejs.dev" target="_blank">*!/*/}
          {/*  /!*              <img src={viteLogo} className="logo" alt="Vite logo"/>*!/*/}
          {/*  /!*          </a>*!/*/}
          {/*  /!*          <a href="https://react.dev" target="_blank">*!/*/}
          {/*  /!*              <img src={reactLogo} className="logo react" alt="React logo"/>*!/*/}
          {/*/!*          </a>*!/*/}
          {/*/!*      </div>*!/*/}
          {/*/!*      <h1>Vite + React</h1>*!/*/}
          {/*/!*  </header>*!/*/}

          {/*/!*  <aside>*!/*/}
          {/*/!*<div className="card">*!/*/}
          {/*/!*  <button onClick={handleClick}>*!/*/}
          {/*/!*    count is {count}*!/*/}
          {/*/!*  </button>*!/*/}
          {/*/!*  <p>*!/*/}
          {/*/!*    Edit <code>src/App.jsx</code> and save to test HMR*!/*/}
          {/*/!*  </p>*!/*/}
          {/*/!*</div>*!/*/}
          {/*/!*  </aside>*!/*/}
          {/*/!*<p className="read-the-docs">*!/*/}
          {/*/!*  Click on the Vite and React logos to learn more*!/*/}
          {/*/!*</p>*!/*/}
          <div className="app">
              <Header/>
              <div className="container">
                  <Sidebar/>
                  <MainContent/>
              </div>
          </div>
      </>
  )
}

export default App
