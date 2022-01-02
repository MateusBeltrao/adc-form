import React, { useState } from "react";
import axios from "axios"
import { Input } from "../../components/Input";
import { Header } from "../../components/Header/Header";
import './style.css'
import { Button } from "../../components/Button";
import error from "../../images/error-icon.svg";




export const Post = () =>{


    const [user, setUser] = useState({
        title: '',
        description: '',
        content: ''
      });
    
      const [status, setStatus] = useState({
        type: '',
        mensagem: ''
      });
    
      //Receber os dados do formulário
      const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value } );

    
      //Enviar os dados para o back-end
      const addUser = async e => {
        e.preventDefault();
        if(!user.title || !user.content || !user.description){
          
        }else{
          axios.post("https://mbn-9.herokuapp.com/create_post", user)
          .then(()=>{
              console.log("Deu tudo certo")
              alert("Post criado com sucesso!!")
          }).catch(()=>{
              console.log("Deu ERRADO")
          })
              
         
        }
        if(!validate()) return;
      
        const saveDataForm = true;
    
        if (saveDataForm) {
          setStatus({
            type: 'success',
            mensagem: "Usuário cadastrado com sucesso!"
          });
          setUser({
            title: '',
            description: '',
            content: ''
          });
        } else {
          setStatus({
            type: 'error',
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      }

     

      function validate(){
        if(!user.title) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo titulo!'});
        if(!user.description) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo descrição!'});
        if(!user.content) return setStatus({type: 'error', mensagem: 'Erro: Necessário preencher o campo centeúdo!'});
        if(user.title.length < 3) return setStatus({type: 'error', mensagem: 'Erro: A Título precisa ter pelo menos 3 caracteres!'});
        if(user.title.length > 40) return setStatus({type: 'error', mensagem: 'Erro: A Título no maxímo 40 caracteres!'});

    
        return true;
      }
    
      return (
        <div>
            <Header></Header>
            <main>
                <div className="card-post" >
            
                    <h1 className="cabeca">Cadastrar Usuário</h1>
                    <div className="line-post" ></div>
                   

                    {status.type === 'success' ? <p style={{ color: "green" }}>{status.mensagem}</p> : ""}
                    {status.type === 'error' ? <p style={{ color: "#ff0000" }}><img src={error} alt={""}></img>{status.mensagem}</p> : ""}
                    <div className="card-body-post" >
                        <form onSubmit={addUser}>
                        <div>
                            <Input label="Titulo: " name="title" onChange={valueInput} value={user.title}></Input>
                        </div>
                        <div>
                            <Input label="Descrição: " name="description" onChange={valueInput} value={user.description}></Input>
                        </div>
                        <div className="fields">
                        <label>Conteúdo: </label>
                            <textarea type="text" name="content" autoComplete="on" onChange={valueInput} value={user.password} /><br /><br />
                        </div >
                        <div className="btn-post">
                        <Button> Cadastrar</Button>
                        </div>
                        </form>
                    </div>
                 </div>
            </main>
        </div>
    
      );
}