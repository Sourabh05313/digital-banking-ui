import React from 'react';
import Section1 from './components/section1/section1';


const App = () => {
  const users =[
    {img:'https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro:'', tag:'Statisfied'},
    {img:'https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro:'', tag:'Underserved'},
    {img:'https://plus.unsplash.com/premium_photo-1661607046789-027c27101d04?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', intro:'', tag:'Underbanked'}
  ]
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
}

export default App;
