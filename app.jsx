        class Greeting extends React.Component {
            constructor(props){

                super(props);

                this.state={
                    title: this.props.title
                };
                
                this.handleSubmit = this.handleSubmit.bind(this);
                this.handleClick= this.handleClick.bind(this);
            }


           handleSubmit(event){
                event.preventDefault();
                let title = this.refs.title.value;

              this.setState({
                  title
              });
               if(title.length<1){
                   this.setState({

                   });
                   alert("sx");
                   this.refs.title.focus();
               }
                         }


            handleClick(e){
                e.preventDefault();
                let title = this.refs.title.value;

              this.setState({
                  title
              });

            }



            render(){
                return(
                    <div>
                        <div>  
                            <h1>{this.state.title}</h1>
                         
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" ref="title"/>
                                
                                <button>SUBMIT</button>

                            </form>
                        </div>
                       
                    </div> 
                   );

                   }
        }



        
let title="new title";
let message="some message";
ReactDOM.render(<Greeting title={title} message={message}/>,document.getElementById('parent'));


 class Title extends React.Component {

 }

ReactDOM.render(<Title title={title}/>,document.getElementById('app'));


 class Message extends React.Component {

 }

 ReactDOM.render(<Message  message={message}/>,document.getElementById('app1'));
