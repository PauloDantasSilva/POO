class Celular {
    Marca() {
        var marca = prompt("Qual a marca do celular?");
        this.MarcaCelular = marca; 
    }

    Modelo() {
        var modelo = prompt(`Qual o modelo do seu ${this.MarcaCelular}?`);
        this.ModeloCelular = modelo;
    }
    Memoria(){
        var Gigas = prompt("Quanto seu celular tem de memória?");
        this.memoria = Gigas;
    }
    Carregador(){
        var TipoCarregador = prompt("Qual a entrada do carregador do seu celular? USB-C, Micro USB ou Lightning?");
        this.carregador = TipoCarregador;
    }
    Cameras(){
        var QuantCameras = prompt ("Quantas câmeras o celular possui atrás ?");
        this.camera = QuantCameras;
    }
}

const meuCelular = new Celular();
meuCelular.Marca();
meuCelular.Modelo();
meuCelular.Memoria();
meuCelular.Carregador();
meuCelular.Cameras();

console.log("As informações inseridas foram:");
console.log(`Meu celular é da marca ${meuCelular.MarcaCelular};`);
console.log(`Do modelo ${meuCelular.ModeloCelular};`);
console.log(`Com ${meuCelular.memoria}Gb;`);
console.log(`Com o carregador de tipo ${meuCelular.carregador};`);
console.log(`E tendo ${meuCelular.camera} câmeras.`);