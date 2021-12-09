const players = [
{id : "human1", name: "angarag",
score:"70"},
{id : "human2", name: "baynaa",
score:"65"},
{id : "human3", name: "tuvshee",
score:"99"},
{id : "human4", name: "tsedvee",
score:"92" },
{id : "human5", name: "temuulen",
score:"79"},
{id : "human6", name: "temka",
score:"75"},
{id : "human7", name: "UUGANAA",
score:"90"},
{id : "human8", name: "ZULAA",
score:"75"},
{id : "human9", name: "BAATARAA",
score:"75"}
]

class Header extends React.Component{
    render(){
        return(
           <header>
               <h1> Scoreboard</h1>
              <div> player: {this.props.activePlayer.length}</div>

          
           </header>

        )
    }
}


class Counter extends React.Component{
    state = {
        score:0
    };
    decrementscore = () =>{
        this.setState(prevState =>({
            score: prevState.score -1
        }))
    }
    incrementscore = () =>{
        this.setState(prevState =>({
            score: prevState.score +1
        })

        )
    }
    render(){
        
        
        return(
            <div className="counter" >
            <button className="counter-action decrement" onClick={this.decrementscore}>  -</button>
            <span className="counter-score" >{this.state.score}</span>
            <button className="counter-action increment" onClick={this,this.incrementscore} >  +</button>
            </div>

        )
    }
}

class Player extends React.Component{
    render(){
        return(
        <div className="player">
            <div className="player-name">{this.props.ner}</div>
             <div className="stats"></div>
           <Counter score={this.props.score}/>
        </div>
        )
    }
}

class App extends React.Component{
    render(){
        return(
            
            <div className="scoreboard">

             <Header activePlayer ={this.props.initialPlayer}/>  
             {this.props.initialPlayer.map(players => <Player ner={players.name} />

             
             )}
            </div>
        )
    }
}
ReactDOM.render(
    <App initialPlayer ={players}/>, document.getElementById("root")
)
