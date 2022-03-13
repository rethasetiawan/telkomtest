import React,{useState, useEffect} from "react";

const RepoList =(props)=>{

    const [name, setName] = useState('');

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
							<div>    Username : {name} </div>
							<div style={{fontWeight:'bold',fontSize:20}}> Repository List </div>
					</div>
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