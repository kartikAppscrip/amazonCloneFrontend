import React, { useState } from 'react';

// const helper = () => {
//   return (
//     <div>
//       {/* {setDialog(true)} */}
//     </div>
//   )
// }
function Body() {
  const [dialog, setDialog] = useState(false);
  return (
    <div style={{ border: '1px solid black', height: '100%' }}>
      <div className='d-flex' onClick={(event) => {
        setDialog(true); console.log(event.pageX, 'kartik', event.pageY)
      }
      }>open popup</div>
      {
        dialog ? <div>
        </div> : ''
      }
    </div>
  );
}


// const data = ['first',
//   'second',
//   'third',
// ]
// const helper = () => {
//   return (data.map((value, index) =>
//     <p key={index}
//       // onClick={() => hellper2()}
//     >{value}</p>))
// }
// const hellper2 = () => {
//   return (
//     <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
//     Popover on right
//   </button>)
// }
// function Body() {
//   return (
//     <div className="mt-4">
//       {/* {helper()} */}
//       <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
//     Popover on right
//   </button>
//     </div>
//   );
// }

export default Body;
