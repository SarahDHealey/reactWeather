
var Greeter = React.createClass({
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
    var name = this.state.name;
    var message = this.props.message;

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
var firstName = 'Sarah';
var message = 'Bonjourno Princepessa'

ReactDOM.render(
  <Greeter name={firstName} message={message}/>,
  document.getElementById('app')
);
