



class Header extends React.Component{
    render(){
        return(
           <header>
               <h1> Scoreboard</h1>
              <span className="stats"> player: {this.props.activePlayer.length}</span>

          
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
            <button className="counter-action increment" onClick={this.incrementscore} >  +</button>
            </div>

        )
    }
}

class Player extends React.Component{
    render(){
        return(
        <div className="player">
         
            
            <span className="player-name">
            <button className="remove-player" onClick = {()=> this.props.removePlayer(this.props.id)}  >✖</button>
            {this.props.ner}
            </span>
             <div className="stats"></div>
        <span>  <Counter score={this.props.score}/></span> 
        </div>
        )
    }
}

class App extends React.Component{
state = {
players :
[
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
]

}
handleRemovePlayer = (id) =>
{
    this.setState(data => ({
        players: data.players.filter(f => f.id !==id) 
    }))
}

    render(){
        return(
            
            <div className="scoreboard">

             <Header activePlayer ={this.state.players.length}/>  
             {this.state.players.map(player => <Player 
             ner={player.name}
            key={player.id.toString()} 
            id= {player.id}
            removePlayer = {this.handleRemovePlayer}/>
                     )}
            </div>
        )
    }
}
ReactDOM.render(
    <App />, document.getElementById("root")
)

