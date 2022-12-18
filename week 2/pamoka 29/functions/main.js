
{function ijungtiAutomatiniKvepinima(){
    setInterval(() => {
        console.log('kvepinamas oras')
    }, 2000)
}
}



{function virtiKava(vanduo, kavosPupeliuKiekis){
    console.log({vanduo, kavosPupeliuKiekis});

    const kavosPupeliuIrVandensSantykis = vanduo / kavosPupeliuKiekis;

    if(kavosPupeliuIrVandensSantykis > 8){
        return 'Amerikano';
    }else if(kavosPupeliuIrVandensSantykis > 4){
        return 'Juoda kava';
    }else{
        return 'Esspreso';
    }
}

    const kavosPuodelis1 = virtiKava(200, 30);
    const kavosPuodelis2 = virtiKava(200, 10);
    const kavosPuodelis3 = virtiKava(50, 50);

    console.log({
        kavosPuodelis1,
        kavosPuodelis2,
        kavosPuodelis3,
    })
}





{function virtiKava(){
    return 'skani kava';
}

    const kavosPuodelis1 = virtiKava();
    const kavosPuodelis2 = virtiKava();
    const kavosPuodelis3 = virtiKava();

    console.log({
        kavosPuodelis1,
        kavosPuodelis2,
        kavosPuodelis3,
    })
}



{function virtiKava(){
    console.log('vykdoma komanda 1...');
    console.log('vykdoma komanda 2...');
    console.log('vykdoma komanda 3...');
    console.log('vykdoma komanda 4...');
    console.log('vykdoma komanda 5...');
}

virtiKava();

}

