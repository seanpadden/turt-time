import React, { Component } from 'react';

class TurtForm extends Component {

  render() {
    return (
      <div className="container">
        <form className="add-turt-form">
          <h3>Create a turt!</h3>
          <input type="text" name="name" placeholder="Enter a turt's name..." className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a turt's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Turt" className="submit"/>
        </form>
      </div>
    );
  }

}

export default TurtForm;
