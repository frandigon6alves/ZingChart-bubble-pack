import React, {useState} from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
/* Additional imports and settings as needed, see above */

function Lixo() {
  const [config] = useState({
    type: 'bar',
    series: [{
      values: [4,5,3,4,5,3,5,4,11]
    }]
  })

	return <ZingChart data={config} />
}

export default Lixo;