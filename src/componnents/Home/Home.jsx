import React from 'react'
import Buttons from './Buttons'

export const Home = () => {
  return (
    <div style={{height:"89vh",backgroundColor:'lightblue', display:'flex' ,flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        {/* <p style={{width:'100%',textAlign:'center',fontFamily:'Roboto',fontWeight:'800',fontSize:80}}> Where pateint meets doctor     </p> */}
        <p style={{width:'90%',textAlign:'center',fontFamily:'Roboto',fontWeight:'800',fontSize:80}}> Where pateint meets doctor     </p>
        <p style={{width:'90%',textAlign:'center',fontFamily:'Roboto',fontWeight:'800',fontSize:20}}> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat 

</p>
        <div className="holder">
        <Buttons/></div>
    </div>

  )
}
