import React from 'react'; //import react

export class Header extends React.Component{ //inherits from react.component 
    render(){
        return ( //display the message ”MyHeader in another component”
            <div>
              <h1>My Header in another component</h1>  
            </div>
          );
    }
}