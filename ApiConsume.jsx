     
    class ApiConsume extends React.Component {
        constructor() {
            super();
            this.state = { items: [] };
        }
        
        componentDidMount() {
            console.log("component did mounr");
            fetch('https://ourpinterest.herokuapp.com/pictures') 
                .then(result=> {
                  result.json().then( result => {
                      this.setState({items: result});
                  });
                    
                });
        }

        validate(){
            if(this.state.items.length>1){
                console.log(this.state.items);
            }
            else {
console.log("not working");
            }
        }
         
        render() {        
            return(
                
                <div>
                    <h1>hello world!</h1>
                     {this.validate()} 
                  
                    <div>Items:</div>
                    
                    { this.state.items.map(item=> { return <div>{item.img}</div>}) }   
                         
                </div>  
            );
        }
    }

ReactDOM.render(<ApiConsume/>,document.getElementById('app1'));
