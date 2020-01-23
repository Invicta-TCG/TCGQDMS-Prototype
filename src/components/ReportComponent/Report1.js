import React, { Component } from 'react';
import Logo from '../../Assets/new1.png';
import { Divider, Row ,Col} from "antd";
class Report1 extends Component {
    render() {
        return (
            <div
            style={{
            padding: 12,
            background: '#eef6fc',
            minHeight: '500px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
        }}>
                <form  style={{border: 'thin solid black',
  padding: '2rem',
  margin: '4rem',
  display: 'flex',width: '800px',height:'910px'}}>
      <span className="formtext" style={{position: 'relative',top: '-52px', background: '#eef6fc',color: 'black', fontSize:'20px',fontWeight:'bold',marginBottom:'800px',}}>Tokyo SuperMix </span>
    	

      <form  style={{border: 'thin solid black',
  padding: '2rem',
 margin: '2rem',
  display: 'flex',height:'160px',marginTop:'-5px',width: '650px',marginLeft:'-100px'}}>
    
    <form  style={{border: 'thin solid black',background:'white',
  padding: '2rem',
   margin: '2rem',
  display: 'flex',height:'140px',marginTop:'-24px',marginLeft:'-30px',width:'260px',marginRight:'10px'}}>
    
    	
       <img src={Logo}  style={{marginLeft:'-30px',height:'100px',width:'130px',marginTop:'-10px',paddingLeft:'25px'}}/>
    	</form>
        <form  style={{border: 'thin solid black',
  padding: '2rem',
  display: 'flex',height:'140px',marginTop:'-24px',    marginLeft: '-9px',width:'600px'}}>
      <Row  style={{paddingLeft:'40px'}}>

      <Row>
      <h4 style={{fontWeight:'bold',marginTop:'-20px'}}>TOKYO SUPERMIX Ready Mixed Concrete Plant.</h4>
      </Row>
     <Row>
    
     </Row>
     <Row>
     <h5 style={{marginTop:'20px',marginTop:'-3px',marginLeft:'70px'}}>77B, New Nuge Road, Pliyagoda</h5>
     </Row>
     <Row>
     <h5 style={{marginLeft:'60px',marginTop:'-3px'}}>Tel. 0112-945865, Fax. 0112-945866</h5>
     </Row>
     <Row>
         <div style={{background:'#cbcaa5',width:'420px',height:'50px',marginLeft:'-50px',color:'black',fontWeight:'bold'}}>
         DETERMINATION OF CLAY, SILT AND DUST IN FINE AGGREGATE - MANUFACTURED SAND (0-5 mm)
         </div>
   
     </Row>
      </Row>
    
    
    	</form>
      
      
    	</form>
        <br/>
        <Row>

<table border = "1" style={{marginTop:'180px',marginLeft:'-680px',width:'650px',color:'black',    fontWeight: 'initial'}}>
<tr >
<td>Sample Code </td>
<td>Sample004</td>
<td>Date of Sampling</td>
<td>4-Sep-19</td>
</tr>
<tr>
<td>Vechicle No</td>
<td style={{width:'100px'}}>NP/5842</td>
<td>Date of Testing </td>
<td>7-Sep-19</td>
</tr>




</table>

</Row>
<Row>

<table border = "1" style={{marginTop:'250px',width:'650px',color:'black', marginLeft:'-680px',   fontWeight: 'initial'}}>
<tr >
<th >Specimen No</th>
<th>1</th>
<th>2 </th>
<th>3</th>

</tr>
<tr style={{height:'50px'}}>
<td>Weight of the oven dried sample with pan before washing (g)</td>
<td style={{width:'100px'}}>744</td>
<td style={{width:'100px'}}>744 </td>
<td style={{width:'100px'}}>744</td>

</tr>
<tr style={{height:'50px'}}>
<td>Weight of the Pan (g)</td>
<td style={{width:'100px'}}>244</td>
<td style={{width:'100px'}}>244 </td>
<td style={{width:'100px'}}>244</td>

</tr>

<tr style={{height:'50px'}}>
<td>Weight of the oven dried sample before washing  (g) (A)</td>
<td style={{width:'100px'}}>500</td>
<td style={{width:'100px'}}>500 </td>
<td style={{width:'100px'}}>500</td>

</tr>

<tr style={{height:'50px'}}>
<td>Weight of the oven dried sample with pan After washing (g)</td>
<td style={{width:'100px'}}>713.2</td>
<td style={{width:'100px'}}>708.8 </td>
<td style={{width:'100px'}}>710</td>

</tr>


<tr style={{height:'50px'}}>
<td>Weight of the oven dried sample  After washing  (g) (B) </td>
<td style={{width:'100px'}}>469.2</td>
<td style={{width:'100px'}}>464.8 </td>
<td style={{width:'100px'}}>466.3</td>

</tr>


<tr style={{height:'50px'}} colspan="2">
<td >
Percentage by mass passing 75% micron
<Row>
<span>
    <hr/>
    <p>B.S Sieve</p>
    <p style={{fontWeight:'bold'}}>(A-B)*100/A</p>
    </span>
</Row>
    
   </td>
<td style={{width:'100px'}}>6.2</td>
<td style={{width:'100px'}}>7.0 </td>
<td style={{width:'100px'}}>6.7</td>

</tr>


<tr style={{height:'50px',width:'200px'}}>
<th colspan='3'>
Average Values
    
   </th>
<td style={{width:'200px'}}>6.6</td>


</tr>

</table>
<tr>
    <td></td>
</tr>

</Row>
<form  style={{border: 'thin solid black',
  padding: '2rem',
  margin: '2rem',
  display: 'flex',width: '650px',height:'130px',marginTop:'725px',marginLeft:'-682px'}}>


    <h3 style={{marginTop:'-30px',marginLeft:'-20px',fontWeight:'bold'}}>CONCLUSION:</h3>	  
       <Divider style={{ borderTop:' 1px dashed black ',marginLeft:'-100px',marginTop:'15px'}}/>
       <Divider style={{ borderTop:' 1px dashed black ',marginLeft:'-585px',marginTop:'40px'}}/>

       <Row>
           <h4 style={{marginTop:'70px',marginLeft:'-590px'}}>Tested By : .............................</h4>
            

            <h4 style={{marginTop:'-30px',marginLeft:'-200px'}}>Quality Controller :.........................</h4>
       </Row>
</form>
    	</form>
                <div>
                    
                </div>
            </div>
        );
    }
}

export default Report1;