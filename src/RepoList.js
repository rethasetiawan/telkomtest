import React,{useState, useEffect} from "react";
import axios from 'axios';

const RepoList =(props)=>{

    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        try {
             setLoading(true);
             const response = await axios.get(
                 `https://api.github.com/users/${name}/repos`
             );
             console.log('response',response)
             setData(response.data)
         } catch (error) {
             console.log('e',error)
         } finally {
             setLoading(false);
         }
     };

    const handleSubmit = () =>{
            fetchData();
            console.log('data',data)
    }

    const handleChangeName = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }

    return(
        <div style={styles.container} >
					<div style={{alignItems:'center', flexDirection:'column', display:'flex'}}>
							<div>
							<input
								style={styles.textBox}
							placeholder = {'Input username'}
							onChange={(event) => handleChangeName(event)}
							/>
							</div>
							<div>Username : {name} </div>
							<button onClick={()=>handleSubmit()}>Submit</button>
							<div style={{fontWeight:'bold',fontSize:20}}> Repository List </div>
					</div>

					{ data == [] ? 'null' :
						data.map((data, index)=> (
							<div key={index}>
								{index+1}.{data.name}
							</div>
            ))
           }
        </div>
    )
}

const styles={
  container:{
    background:'#EEEEEE',
        width:'80%',
        height:'100vh'
  },
    textBox:{
    border:'1px solid gray',
    background:'white',
    borderRadius:5,
    height:30,
    margin:10,
        padding:'0px 10px 0px 10px',
  },
}

export default RepoList