import React from 'react'; //import react

export class Content extends React.Component{ //inherits from react.component 
    render(){
      //displays hello world!” as a <h1>tag only.
      //displays the time under
        return ( 
            <div>
              <h1>"Hello Wolrd"</h1>  {/*heading */}

              <h2>It is {new Date().toLocaleTimeString()}.</h2>  {/* shows time */}
            </div>
          );
    }
}