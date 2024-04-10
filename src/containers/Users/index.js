import axios from "axios";
import React, { useState, useRef } from "react";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import { Container, H1, Image, ContainerItens, Button, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    if (inputName.current && inputAge.current) {
      const { data: newUsers } = await axios.post(
        "http://localhost:3001/users",
        {
          name: inputName.current.value,
          age: inputAge.current.value,
        }
      );
     setUsers([...users, newUsers]);

    }
  }

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    setUsers(users.filter((user) => user.id !== userId));
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={addNewUser}>
          <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
