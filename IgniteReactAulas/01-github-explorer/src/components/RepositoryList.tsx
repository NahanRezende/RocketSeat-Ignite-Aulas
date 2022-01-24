import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from 'react'

import '../styles/repositories.scss';

/*
useEffect:
useEffect((ARROW FUNCTION) => {FUNÇÃO A SER EXECUTADA}.[CONDIÇÃO DE TERMINO DE EXECUÇÃO])

Cuidado para não deixar o useEffect sem o segundo parametro (condiçãode quando executar), sem essa condição ele 
fica executando em loop

key:
Toda vez que fizermos um map, precisamos passar um propriedade unica do item do array como sendo um caso de não
repetição e fazermos isso atravez da flag key={}, necessario somente no primeiro item
*/

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.name} repository={repository}/>
        ))}
      </ul>
    </section>
  )
}