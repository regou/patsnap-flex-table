var React = require('react');


var FlexTable = require('./jsx/FlexTable.jsx');

   window.qqaa=1500000;

var tableData = {
   thead:['Name','Age'],
   tbody:[
      ['wx',2],
      ['wx2',3260],
      ['wx3',2400],
      ['wx7',120],
      ['wx5',1000],
      ['wx1',3260],
      ['wx4',900]
   ]
};


React.render(<FlexTable tableData={tableData}/>,document.body);