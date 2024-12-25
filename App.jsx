import './App.css'

function App() {
  function Image() {
   return <img className="image" src="./public/image.webp" alt="Gdg AASTU" />
  }

  return (
    <>
      <div>
       <Image/>
      </div>
      <div>
        <h1>
          G9 GDG Members
        </h1>
        <div className='members'>
        <ol>
            <li>Binyam Cheru Debebe</li>
            <li>Helen lemessa</li>
            <li>Adugna Benti Itefa</li>
            <li>Dureti Hailu</li>
            <li>Olman Gemechu Wako</li>
            <li>Bezawit Taye</li>
            <li>Dawit Tadele Terefe</li>
            <li>Natnael Dejene</li>
            <li>Dagim Demissie</li>
            <li> Hanan Yesuf</li>
           </ol>
        </div>
        
         
        
      </div>
      <br/>
           
           
    </>
  )
}

export default App
