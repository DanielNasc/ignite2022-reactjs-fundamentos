# Anotações

## Componentes

Componentes são uma forma de dividir a interface em partes independentes e reutilizáveis.

Exemplo:
```jsx
function Button(props) {
  return <button>{props.children}</button>;
}
```

São exportados de dentro de arquivos com a extensão `.jsx` ou `.tsx`.

## Default Exports vs Named Exports

- **Default exports**
    - Exportações padrão são exportadas de um arquivo;
    - Pode-se dar o nome que quiser na importação;

    Exemplo:
    ```jsx
    export default function Button() {};
    ```

    Importação:
    ```jsx
    import Button from './Button';
    ```

    Ou ainda:
    ```jsx
    import DUDHDisdisdjakUIDibdbojd from './Button';
    ```

- **Named exports**
    - Exportações nomeadas são exportadas de um módulo;
    - Não pode-se dar o nome que quiser na importação;

    Exemplo:
    ```jsx
    export function Button() {};
    ```

    Importação:
    ```jsx
    import { Button } from './Button';
    ```

## Scoped CSS

Isolar CSS de componentes diferentes em escopos separados, para que um não afete as estilizações de outros. 

