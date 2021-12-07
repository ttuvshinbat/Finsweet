// const title = React.createElement (
//     "h1",
//     { id: "main-title" },
//     "my first react element",

// )
// const element = <h2>bolhonuu harii daa</h2>
// const desc = React.createElement (
//     "p",
//     null,
//     "second item null gej ogloo"
// )
// let brown = <p> brown ni bor ym aa</p>
// let white = <p> brown is tsagaan</p>
// const header = React.createElement(
//     'header',
//     null,
//     "tiimdee",
//     title,
//     desc,
//     element

// )
// ReactDOM.render(
  
//     header,
//     document.getElementById('root')
// )
// ReactDOM.render(
  
//     brown,
//     document.getElementById('root')
// )
// const section = React.createElement(
//     <header>
//         <h1>{brown}</h1>
//         <p>{white}</p>
//     </header>
 
//  )

//  ReactDOM.render(
  
//     section,
//     document.getElementById('coll')
// ),


// const an =" this is my first react"
// const myTitled = 'my-titled'
// const userName = 'Tuvshinbat'
// const  Headers =() =>  {
// return(
//     <header>
//         <h1 id={myTitled}>{userName} first React app</h1>
//         <span className = "stats"></span>
//         <p></p>

//     </header>
// )
// }

// ReactDOM.render(
//     <Headers> </Headers>,
//     document.getElementById("root")

// )
const Header = () =>{
    return(
        <header>
            <h1>scoreboard</h1>
            <span className="stats">Player : 1</span>
        </header>
    )
}
const Counter = () => {
    return( <div className="counter">
    <button className=" counter-action decrement">-</button>
    <span className="counter-score" >35</span>
    <button className=" counter-action decrement">+</button>
    
</div>
        
    )
}
const Player = () => {
    return(
        <div className="player">
            <span className="player-name">
                Tuvshinbat
         </span>
        <Counter/>
        </div>
    )
}
// ene shees hereggui boslon
// ReactDOM.render(
//     <Player></Player>,
//     document.getElementById('root')
// )



const App = () =>
{
    return(
        <div className = "scoreboard">
          <Header/>
          <Player/>

        </div>

    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)









