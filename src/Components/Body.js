import { AiTwotoneInfoCircle } from 'react-icons/ai';
// import { AiTwotoneInfoCircle } from 'react-icons/ai';

function Body(){
    return(
        <div>
            <div style={{height:"240px",display:"flex" , marginTop:"20px"}}>
                <div style={{width:"40%",marginLeft:"10%",padding:"30px 0"}}>
                    <h1>Header Footer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, adipisci! </p>
                   <div style={{fontSize:"24px",margin:"30px 30px",color:"#F0740F"}}>
                    <AiTwotoneInfoCircle/>
                    <AiTwotoneInfoCircle/>
                    <AiTwotoneInfoCircle/>
                    </div> 
                </div>
                <div >
                    <img src="https://th.bing.com/th/id/OIP.S-UbHmz1hZ4qG-Xjvx8C1AHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7://th.bing.com/th/id/OIP.qu3g2RZHezGWomLlblHd_AHaHf?w=151&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"style={{height:"300px",width:"400px",padding:"10px",}} />
                </div>
            </div>
        </div>
    )
}
export default Body