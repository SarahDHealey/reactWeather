
//first nested component
//follows single responsibility principle
//remember: every component needs to have a render method

//there are two types of components
//1 - presentational component renders something visible to the screen
//or responds to user input
//presentational components don't maintain state
//they just render to the browser and/or call functions when the user interacts
//2 - container components do maintain state.
//It automatically renders its children when its state changes and the children rely on it
//notice there is nothing inside the parent other than the children

//we are going to pass a greeter component as a prop into the greeter form
//define that function in greeter

//GreeterMessage Component aka presentation component (child)
var GreeterMessage = React.createClass({
  render: function() {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

//GreeterForm Component aka presentation component (child)
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if(message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewData(updates);
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>submit</button>
        </div>
      </form>
    );
  }
});

//3 things to do here:
//1. set initial message state equal to whatever prop got passed in
//ie this.props.message
//inside handleNewName you are getting an updates object
//pass the object directly to setState
//finally access this.state.message
//Greeter Component aka container component (parent)
var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates) {
    this.setState(updates);
  },
  render: function() {
    var name = this.state.name;
    var message = this.state.message;

    //nest the GreeterMessage component
    //when you have a parent component that is handling an event from a children
    //you usually call the parent handle followed by the name you chose
    //and then you call it in the child with on followed by the name you chose
    //now you have a new prop. You can access it with this.props.onNewName
    //all it does is call the handleNewName function that sets the state
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData = {this.handleNewData}/>
      </div>
    );
  }
});
var firstName = 'Sarah';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
