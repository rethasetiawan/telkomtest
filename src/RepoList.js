import React,{useState, useEffect} from "react";
import axios from 'axios';

const RepoList =(props)=>{

    const [name, setName] = useState('');
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState('');

    const fetchData = async () => {
        try {
             setLoading(true);
						 setNotFound('')
             const response = await axios.get(
                 `https://api.github.com/users/${name}/repos`
             );
             console.log('response',response)
             setData(response.data)
         } catch (error) {
             console.log('e',error)
						 setNotFound('No repository for this username')
             setData([])
         } finally {
             setLoading(false);
         }
     };

    const handleSubmit = () =>{
            fetchData();
    }

    const handleChangeName = (event) =>{
        console.log(event.target.value)
        setName(event.target.value)
    }

		let loadingTxt;
		if(loading){
				loadingTxt='Loading'
		} else{
				loadingTxt=''
		}

    return(
        // for example i input 'mil' for username
        <div style={styles.container} >  
					<div style={{alignItems:'center', flexDirection:'column', display:'flex'}}>
							<div>
							<input
							style={styles.textBox}
							placeholder = {'Input username'}
							onChange={(event) => handleChangeName(event)}
							/>
							<button onClick={()=>handleSubmit()}>Submit</button>

							</div>
							<div>Username : {name} </div>
							<div style={styles.bold}> Repository List </div>
                            <div style={styles.bold}>==============</div>
					</div>

					{
                (!data ? 
                   notFound    
                     :
                     <>
                     {loadingTxt}
                     {notFound}
                        {    data.map((data, index)=> (
                            <div key={index}>
                            {index+1}.    {data.name} {`--> `} 
                            <a href={data.html_url} >{data.html_url} </a>
                            </div>
                        ))}
                    </>
                )
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
	bold:{
		fontWeight:'bold',
		fontSize:20
}
}

export default RepoList