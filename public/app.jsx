//this is your first react component
//notice that it is capitalized
//react.createClass takes as its one and only argument a options object.
//this is where we can define the behavior for our object
//createClass is the most common react method
//the only thing required for a react component is a render method
//all the render method expects is that you return jsx code to be rendered to the browser
//note you can only return one root html elements. In this case a div
//if you try to return more than one root element your program will break

//for getInitialState we are telling our program this...
//you know you are going to get a name no matter what.
//it will either be passed in or it will be set to default of React
//that is fine the props cool
//but what I want you to do as a component is maintain a name state
//that you can change yourself
//important distinction:
//a component can't update props
//so we want to use state for the name
//since we're going to be letting a user update it

//in order for react to re-render the component
//we need to call set state
//the reason we want to call set state is to 1. set a new value for name and
//2. we can re-render our component if the component depends on the name state - which it does.
var Greeter = React.createClass({
  //you also want to set up default props though in case it doesn't find the name
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message.'
    };
  },
  getInitialState: function() {
    return {
      name: this.props.name
    };
  },
  onButtonClick: function(e) {
    e.preventDefault();
    //this gets the value from the node
    //then resets the input box to empty
    //if you fill nothing in the box it will stay the way it is, it will not break
    var nameRef = this.refs.name
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === "string" && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function() {
    //here is where you get the props
    //and the state

    var name = this.state.name;
    var message = this.props.message;


    //the input is going to have two attributes provided
    //ref lets us give a name to an attribute that we want to access later
    //onsubmit expects a function to be passed to it
    return (
      <div>
        <h2>Hello, {name}</h2>
        <h1>This is Your First React Component</h1>
        <p>{message + ' tada!'}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

//so now you have your greeter component, you just aren't using it anywhere
//to use it you are going to pass it to the ReactDOM.render below
//the tag will be the same name as your var name.

//most common react dom method

//props - short for properties is a way to pass data to your component when you first start it. name="sarah" is an example of a prop

//{} these guys are javascript expressions

//there's 2 types of data in a component - props and state
//props get passed to a component as you initialize it
//state is internally maintained and updated by the component
//so a component shouldn't update its own props but it is allowed to update its own state

var firstName = 'Sarah';
var message = 'Bonjourno Princepessa'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
