/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

// nao precisa colocar tudo na tipagem
// apenas o que sera utilizado
interface Repository {
 full_name: string;
 description: string;
 owner: {
  login: string;
  avatar_url: string;
 };
}

const Dashboard: React.FC = () => {
 // onde vamos pegar o valor do input
 const [newRepo, setNewRepo] = useState('');
 // estado de erro
 const [inputError, setInputError] = useState('');
 // onde vamos salvar os repositorios usestate é um array de Repository
 // inicia os repositories com o que tiver no local storage
 const [repositories, setRepositories] = useState<Repository[]>(() => {
  const storageRepositories = localStorage.getItem(
   '@GithubExplorer:repositories',
  );
  if (storageRepositories) {
   return JSON.parse(storageRepositories);
  }
  return [];
 });

 // salva os repositorios no localstorage assim que a variavel
 // repositories sofre alteração
 useEffect(() => {
  localStorage.setItem(
   '@GithubExplorer:repositories',
   JSON.stringify(repositories),
  );
 }, [repositories]);

 async function handleAddRepository(
  event: FormEvent<HTMLFormElement>,
 ): Promise<void> {
  // evita o evento padrao q e carregar/recarregar uma pagina
  event.preventDefault();

  // verifica se o usuario nao digitou nd
  if (!newRepo) {
   setInputError('Digite o autor/nome do repositório');
   return;
  }

  try {
   // consumir api
   const response = await api.get<Repository>(`repos/${newRepo}`);
   const repository = response.data;

   // salvar repo no estado
   // copia a lista atual e add um novo repo
   setRepositories([...repositories, repository]);

   // limpando o input apos a pesquisa
   setNewRepo('');
   setInputError('');
  } catch (err) {
   // caso tenha algo errado com o que foi digitado
   setInputError('Erro na busca por esse repositório');
  }
 }

 return (
  <>
   <img src={logoImg} alt="Github Explorer" />
   <Title>Explore repositórios no Github</Title>

   {/* !! significa Boolean (true ou false) */}
   <Form hasError={!!inputError} onSubmit={handleAddRepository}>
    <input
     value={newRepo}
     onChange={(e) => setNewRepo(e.target.value)}
     placeholder="Digite o nome do repositório"
    />
    <button type="submit">Pesquisar</button>
   </Form>

   {/* condição para mostrar o erro apenas qndo ele existir */}
   {inputError && <Error>{inputError}</Error>}

   <Repositories>
    {repositories.map((repository) => (
     <Link
      key={repository.full_name}
      to={`/repository/${repository.full_name}`}
     >
      <img src={repository.owner.avatar_url} alt={repository.owner.login} />
      <div>
       <strong>{repository.full_name}</strong>
       <p>{repository.description}</p>
      </div>
      <FiChevronRight size={22} />
     </Link>
    ))}
   </Repositories>
  </>
 );
};

export default Dashboard;
