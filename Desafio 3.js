class Heroi {
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }

    atacar() {
        let ataque;

        switch (this.classe) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'Nulo';
        }

        console.log(`O ${this.classe} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroiGuerreiro = new Heroi('Bussunda', 30, 'guerreiro');
const heroiMago = new Heroi('Maloca', 20, 'mago');

heroiGuerreiro.atacar(); 
heroiMago.atacar();