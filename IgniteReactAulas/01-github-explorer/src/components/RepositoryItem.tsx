/* ?? propriedade parecida com o ou porem desconsidera o 0 como sendo invalido, propriedade nova do javascript, utilizar 
      sempre que quiser usar um valor padrão para algo.*/

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps){
  return(
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}