import React from 'react';
import './Question.css'

const Question = () => {
    return (
      <div className='FAQ'>
        <h3>How react works?</h3>

        <p>
          Working in react first of all we need two packages, one of them react
          and another one is React DOM. When we write a component that is pure
          JavaScript code then JavaScript code convert html code because we saw
          webpage in html code. Now convert JavaScript code in html we use
          react. In html file inject html by react DOM and whole process
          complete without page reload.
        </p>
        <h3>Difference between props and state?</h3>

        <p>
          About props: first of all, it is immutable. By props data pass one
          component to another component. Props can be used with state and
          functional components.<br></br> About State: It is mutable. The Data is passed
          within the component only. State is both read and write.
        </p>
      </div>
    );
};

export default Question;