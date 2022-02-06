import { useEffect, useState } from 'react';
import {Container,Row,Col,Form,Button,Spinner} from 'react-bootstrap';
import axios from 'axios';

const todoWindowStyle={
    maxWidth:700,
    height:"auto",
}

const RowStyleHead={
    height:"50px",
    alignItems:"center",
    marginBottom:5,
    backgroundColor:"rgb(242, 242, 242)",
    fontFamily: "Times New Roman",
    fontSize:"20px"
}
const RowStyleContent={

    height:"50px",
    alignItems:"center",
    marginBottom:5
}

const TodoList ={
    height:"50px",
    alignItems:"center",
    backgroundColor:"red",
    margin:3,
    fontFamily: "Times New Roman",
    fontSize:"17px",
    backgroundColor:"rgb(242, 242, 242)",

}

function TodoWindow(){
    
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      async function get(){
        await axios.get("/getList").then(function(response){
             setTodoList(response.data);
             
         }).catch(function(error){
             console.log(error)
         });
         setLoading(false)
     }
      get()
      
  },[])

    const [todoList,setTodoList] = useState([{
    }])
    
    const [todoText,setTodoText] = useState("");


    
    function handleCheck(key){
        todoList.map((item,index)=>{
            if(item.id === key){
                item.checked = + !item.checked;
                axios.post("/checkPost",{
                    id:key,
                    checked: item.checked
                }).then(function(response){
                    if(response.status === 200){
                        return("ok");
                    }
                }).catch(function(error){
                    console.log(error);
                })
            }
            
        })
      }

      

      function handleSubmit(event){
        if(event.key === "Enter"){
            axios.post("/postList",{
                todoValue:todoText,
                checked:false
            }).then(function(response){
                setTodoList([...todoList,response.data[0]])
            }).catch(function(error){
                alert(error)
            })
        }
        
        
      }

     function handleDelete(key){
         axios.post("/deletePost",{
             id:key
         }).then(function(response){
             if(response.status === 200){
                    setTodoList(todoList => todoList.filter(item=>item.id !== key));
   
             }
         }).catch(function(error){
             console.log(error);
         })

     }

    
    return(
    <Container style={todoWindowStyle} className='rounded border'>
        
            {!loading ? 
            <div>
        <Row style={RowStyleHead} className='rounded' className="border rounded" >
            <Col>
                Todo {todoList.length}
            </Col>
        </Row>
        <Row style={RowStyleContent}>
            <Col>
                <Form.Control type="text" onKeyDown={(e)=>handleSubmit(e)} placeholder="Enter Todo Here" value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
            </Col>
            <Col xs="auto">
                <Button variant="primary" onClick={()=>handleSubmit()} >Ekle</Button>
            </Col>
        </Row>
        {todoList.map((v,k)=>{
            return v.todoText ?
        <Row  style={TodoList}  className="rounded" key={k}>
        <Col xs="auto">
        <Form.Check type="switch"  defaultChecked={v.checked} onChange={()=>handleCheck(v.id)}/>
        </Col>
        <Col>
            {v.todoText}
        </Col>
        <Col xs="auto" className="rounded">
            <Button variant="primary">Düzenle</Button>
        </Col>
        <Col  xs="auto" className="rounded">
            <Button variant="warning" onClick={()=>handleDelete(v.id)}>Sil</Button>
        </Col>
    </Row>
    : ""
        })}
         </div>
        : <center><Spinner animation="border" /></center>}

       
    </Container>
    
    )
}

export default TodoWindow;