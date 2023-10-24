/* 
    um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface.
    esse tipo poderá ser indicado no momento de uso da função através do <tipo>.
*/

// interface genérica para representar um item
interface Item<T> {
    id: number;
    conteudo: T;
}

// classe genérica que representa uma coleção de itens.
class Collection<T> {
    private itens: Item<T>[] = [];
    
    addItem(item: Item<T>): void { // método para adicionar item à coleção de itens
        this.itens.push(item);
    }
    
    idItem(id: number): Item<T> | undefined { // método que retorna o id do item selecionado
        if(id >= 0 && id < this.itens.length) {
            return this.itens[id];
        }
        return undefined;
    }
}

// função que imprime na tela o id  o conteudo do item
function showProduct<T>(item: Item<T>): void {
    console.log(`
        ID - ${item.id}
        Conteudo: ${item.conteudo}
    `)
}

// exemplo de uso
const numeros: Collection<number> = new Collection<number>();
numeros.addItem({id: 1, conteudo: 20});

const item = numeros.idItem(0);

if(item) {
    showProduct(item);
}