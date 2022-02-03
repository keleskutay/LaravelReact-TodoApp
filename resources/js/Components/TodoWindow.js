import { useState } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';

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
    const [todoList,setTodoList] = useState([{}]);
    const [todoValue,setTodoValue] = useState("");

    function handleToggle(id,v){
        const newTodoList = todoList.map((item,itemId)=>{
            console.log(id,itemId)
            if(id == itemId){

                const updatedItem = {
                    ...item,
                    selected:v == "on" ? true : false
                };
                return updatedItem;
            }
            return item;
        })

        setTodoList(newTodoList)
        console.log(todoList)

    }

    function addHandler(){
        
        setTodoList([...todoList,{value:todoValue,selected:false}])
        setTodoValue("");
    }

    
    return(
    <Container style={todoWindowStyle} className='rounded border'>
        <Row style={RowStyleHead} className='rounded' className="border rounded" >
            <Col>
                Todos (x)
            </Col>
        </Row>
        <Row style={RowStyleContent}>
            <Col>
                <Form.Control type="text" placeholder="Enter Todo Here" value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
            </Col>
            <Col xs="auto">
                <Button variant="primary" onClick={addHandler}>Ekle</Button>
            </Col>
        </Row>
        {todoList.map((v,k)=>{
            return v.value ?
        <Row  style={TodoList}  className="rounded" key={k}>
        <Col xs="auto">
        <Form.Check type="switch"  defaultChecked={false} onChange={(e)=>handleToggle(k,e.target.value)}/>
        </Col>
        <Col>
            {v.value}
        </Col>
        <Col xs="auto" className="rounded">
            <Button variant="primary">Düzenle</Button>
        </Col>
        <Col  xs="auto" className="rounded">
            <Button variant="warning">Sil</Button>
        </Col>
    </Row>
    : ""
        })}
        
    </Container>
      
    )
}

export default TodoWindow;