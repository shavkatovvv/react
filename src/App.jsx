

import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Manage } from "./components/manage";
import { Cards } from "./components/cards";
import { Comment } from "./components/comments";


function App() {
  

  return (
    <>
    <div className='container'>
    <Header/>
    <Hero/>
    <div className="main_wrapper">
    <Manage/>
    <div>
    <Cards
     num={"01"}
     title={"Track company-wide progress"}
     text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
    />
    <Cards
     num={"01"}
     title={"Track company-wide progress"}
     text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
    />

<Cards
     num={"01"}
     title={"Track company-wide progress"}
     text={`See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.`}
    />
    </div>
    
    </div>
      <Comment/>

    </div>
    
    </>
  )
}

export default App
