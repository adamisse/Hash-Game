let pos0 = document.getElementById('pos0')
let pos1 = document.getElementById('pos1')
let pos2 = document.getElementById('pos2')
let pos3 = document.getElementById('pos3')
let pos4 = document.getElementById('pos4')
let pos5 = document.getElementById('pos5')
let pos6 = document.getElementById('pos6')
let pos7 = document.getElementById('pos7')
let pos8 = document.getElementById('pos8')
let jogo = [] //posições jogadas; ||jogo
let tabuleiro = [] //elementos visuais; ||tabuleiro;
let quemJoga = 0 //0=jogador;1=cpu; ||quemjoga;
let verifica //verifica o vencedor
let jogando=true //verifica se está jogando
let nivel=1 //nivel de dificuldade
let jogadaCpu=1
let quemComeca=1
let jogada=0

function changeLevel(){
    if(nivel==1){
        start()
        nivel=2
        document.getElementById('nivel').innerHTML = 'Nível: Difícil'
    }else{
        start()
        nivel=1
        document.getElementById('nivel').innerHTML = 'Nível: Normal'
    }
}

function cpuJoga(){
    if(jogando==true){
        let l,c
        //NÍVEL 1;
        if(nivel==1){
            do{
                l=Math.round(Math.random()*2)
                c=Math.round(Math.random()*2)
            }while(jogo[l][c]!='')
            jogo[l][c]='O'
        //NÍVEL 2;
        }else if(nivel==2){
            ////***************************ATAQUES*****************************
            //ATAQUE DA LINHA 1
            if((jogo[0][0]=='O')&&(jogo[0][1]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[0][2]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[0][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //ATAQUE DA LINHA 2
            else if((jogo[1][0]=='O')&&(jogo[1][1]=='O')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='O')&&(jogo[1][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[1][2]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }
            //ATAQUE DA LINHA 3
            else if((jogo[2][0]=='O')&&(jogo[2][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='O')&&(jogo[2][2]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='O')&&(jogo[2][2]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }
            //ATAQUE DA COLUNA 1
            else if((jogo[0][0]=='O')&&(jogo[1][0]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][0]=='O')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='O')&&(jogo[2][0]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //ATAQUE DA COLUNA 2
            else if((jogo[0][1]=='O')&&(jogo[1][1]=='O')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='O')&&(jogo[2][1]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][1]=='O')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }
            //ATAQUE DA COLUNA 3
            else if((jogo[0][2]=='O')&&(jogo[1][2]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='O')&&(jogo[2][2]=='O')&&(jogo[1][2]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][2]=='O')&&(jogo[2][2]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }
            //ATAQUE DIAGONAL 1
            else if((jogo[0][0]=='O')&&(jogo[1][1]=='O')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='O')&&(jogo[2][2]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][2]=='O')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //ATAQUE DIAGONAL 2
            else if((jogo[0][2]=='O')&&(jogo[1][1]=='O')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='O')&&(jogo[2][0]=='O')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='O')&&(jogo[2][0]=='O')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }
            //***************************DEFESAS*****************************
            //DEFESA DA LINHA 1
            else if((jogo[0][0]=='X')&&(jogo[0][1]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[0][2]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[0][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //DEFESA DA LINHA 2
            else if((jogo[1][0]=='X')&&(jogo[1][1]=='X')&&(jogo[1][2]=='')){
                jogo[1][2]='O'
            }else if((jogo[1][0]=='X')&&(jogo[1][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[1][2]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }
            //DEFESA DA LINHA 3
            else if((jogo[2][0]=='X')&&(jogo[2][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[2][0]=='X')&&(jogo[2][2]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[2][1]=='X')&&(jogo[2][2]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }
            //DEFESA DA COLUNA 1
            else if((jogo[0][0]=='X')&&(jogo[1][0]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][0]=='X')&&(jogo[1][0]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][0]=='X')&&(jogo[2][0]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //DEFESA DA COLUNA 2
            else if((jogo[0][1]=='X')&&(jogo[1][1]=='X')&&(jogo[2][1]=='')){
                jogo[2][1]='O'
            }else if((jogo[0][1]=='X')&&(jogo[2][1]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][1]=='X')&&(jogo[0][1]=='')){
                jogo[0][1]='O'
            }
            //DEFESA DA COLUNA 3
            else if((jogo[0][2]=='X')&&(jogo[1][2]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][2]=='X')&&(jogo[2][2]=='X')&&(jogo[1][2]=='')){
                jogo[1][0]='O'
            }else if((jogo[1][2]=='X')&&(jogo[2][2]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }
            //DEFESA DIAGONAL 1
            else if((jogo[0][0]=='X')&&(jogo[1][1]=='X')&&(jogo[2][2]=='')){
                jogo[2][2]='O'
            }else if((jogo[0][0]=='X')&&(jogo[2][2]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][2]=='X')&&(jogo[0][0]=='')){
                jogo[0][0]='O'
            }
            //DEFESA DIAGONAL 2
            else if((jogo[0][2]=='X')&&(jogo[1][1]=='X')&&(jogo[2][0]=='')){
                jogo[2][0]='O'
            }else if((jogo[0][2]=='X')&&(jogo[2][0]=='X')&&(jogo[1][1]=='')){
                jogo[1][1]='O'
            }else if((jogo[1][1]=='X')&&(jogo[2][0]=='X')&&(jogo[0][2]=='')){
                jogo[0][2]='O'
            }else{
            //************************OUTRAS JOGADAS**************************
                if(jogada<8){//menor que 8 pois caso haja apenas uma posição vazia a cpu deve jogar nela;
                    do{
                        l=Math.round(Math.random()*2)
                        c=Math.round(Math.random()*2)
                    }while(jogo[l][c]!='')
                    jogo[l][c]='O'
                }else{//só tem uma posição vazia, então o programa percorre a matriz e acha a posição vazia ;
                    for(let l=0;l<3;l++){
                        for(let c=0;c<3;c++){
                            if(jogo[l][c]==''){
                                jogo[l][c]='O'
                            }
                        }
                    }
                }
            }
        }
        verifica=verificaVitoria()
        if(verifica!=''){
            console.log(verifica)
            alert(verifica+' venceu')
            document.getElementById('placarCpu').innerHTML+='I'
            jogando=false
        }
        atualizaTabuleiro()
        jogada++
        quemJoga=0
    }
}

function verificaVitoria(){
    let l,c
    for(l=0;l<3;l++){//verifica as linhas;
        if((jogo[l][0]==jogo[l][1])&&(jogo[l][1]==jogo[l][2])){
            return jogo[l][0]
        }
    }
    for(c=0;c<3;c++){//verifica as colunas;
        if((jogo[0][c]==jogo[1][c])&&(jogo[1][c]==jogo[2][c])){
            return jogo[0][c]
        }
    }
    if((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])){//verifica diagonal;
        return jogo[0][0]
    }
    if((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])){//verifica diagonal;
        return jogo[0][2]
    }
    return ''
}

function jogar(pos){//posição;
    if((jogando==true)&&(quemJoga==0)){                
        switch(pos){
            case 0:
                if(jogo[0][0]==''){
                    jogo[0][0]='X'
                    quemJoga=1
                }
            break
            case 1:
                if(jogo[0][1]==''){
                    jogo[0][1]='X'
                    quemJoga=1
                }
            break
            case 2:
                if(jogo[0][2]==''){
                    jogo[0][2]='X'
                    quemJoga=1
                }
            break
            case 3:
                if(jogo[1][0]==''){
                    jogo[1][0]='X'
                    quemJoga=1
                }
            break
            case 4:
                if(jogo[1][1]==''){
                    jogo[1][1]='X'
                    quemJoga=1
                }
            break
            case 5:
                if(jogo[1][2]==''){
                    jogo[1][2]='X'
                    quemJoga=1
                }
            break
            case 6:
                if(jogo[2][0]==''){
                    jogo[2][0]='X'
                    quemJoga=1
                }
            break
            case 7:
                if(jogo[2][1]==''){
                    jogo[2][1]='X'
                    quemJoga=1
                }
            break
            case 8:
                if(jogo[2][2]==''){
                    jogo[2][2]='X'
                    quemJoga=1
                }
            break
        }
        if(quemJoga==1){
            atualizaTabuleiro()
            verifica=verificaVitoria()
            if(verifica!=''){
                console.log(verifica)
                alert(verifica+' venceu')
                document.getElementById('placarJogador').innerHTML+='I'
                jogando=false
            }   
            jogada++
            cpuJoga()
        }
    }
}

function atualizaTabuleiro(){//dois for, um para as linhas, outro para as colunas;
    for(let l=0;l<3;l++){//linha
        for(let c=0;c<3;c++){//coluna
            if(jogo[l][c]=='X'){
                tabuleiro[l][c].innerHTML='X'
                tabuleiro[l][c].style.cursor='default'
            }else if(jogo[l][c]=='O'){
                tabuleiro[l][c].innerHTML='O'
                tabuleiro[l][c].style.cursor='default'
            }else{
                tabuleiro[l][c].innerHTML=''
                tabuleiro[l][c].style.cursor='pointer'
            }
        }
    }
}

function start(){
    jogando=true
    jogadaCpu=1
    jogada=0
    jogo=[//matriz;
        ['','',''],
        ['','',''],
        ['','','']
    ]
    tabuleiro=[
        [pos0,pos1,pos2],
        [pos3,pos4,pos5],
        [pos6,pos7,pos8]
    ]
    atualizaTabuleiro()
    if(quemComeca==1){
        quemComeca=0
        quemJoga=quemComeca
        document.getElementById('jogador').innerHTML = 'Quem Começa: Jogador'
    }else{
        quemComeca=1
        quemJoga=quemComeca
        document.getElementById('jogador').innerHTML = 'Quem Começa: CPU'
        cpuJoga()
    }
}   
window.addEventListener('load', start)
