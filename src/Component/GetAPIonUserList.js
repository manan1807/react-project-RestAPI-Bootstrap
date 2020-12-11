import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'

function GetAPIonUserList() {

    const [users,setUser] = useState([]);
        
    useEffect(()=>{
        fetch("http://localhost:8081/topics").then((data)=>{
            data.json().then(result=>{
                console.warn(result);
                  setUser(result)
            })
        })
    },[])
    return (
        <div>
            <h1>List function Component Using BootStrap</h1>
            <h2><u>Data will be displayed, when API server is Up!</u></h2>


            <Table striped bordered hover>
                <thead>
                    <tr>
                       
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((item, i) =>
                            <tr key={i}>
                                
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                            </tr>)}

                </tbody>
            </Table>



        </div>  
    )
}
export default GetAPIonUserList;