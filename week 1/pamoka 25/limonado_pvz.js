const limonadoKaina  = 1.20;

let imestiPinigai = 0;

if (imestiPinigai >= limonadoKaina){
    console.log('Limonadas pateikiamas...');
        let graza = imestiPinigai - limonadoKaina;
        if(graza > 0){
            console.log('paimkite graza')
        }else{
            console.log('paimkite produkta')
        }
}else{
    console.log('nepakanka pinigu');
}