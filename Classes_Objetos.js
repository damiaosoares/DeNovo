// Corrigindo o nome da classe (começando com letra maiúscula)
class FormaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa;
        this.saborRecheio = saborRecheio;
    }

    escrever() {
        // Usando "this" para acessar as propriedades da instância
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }
}

// Criando uma instância da classe
const boloFesta = new FormaDeBolo("chocolate", "morango");

// Chamando o método escrever
boloFesta.escrever();