function microondas(prato, tempo){
    let microondas = false

if(prato == "Pipoca" && tempo <= 20 && tempo >= 10){
        console.log("Prato pronto, bom apetite!")
        microondas = true
}

else if(prato == "Macarrão" && tempo <= 16 && tempo >= 8){
    console.log("Prato pronto, bom apetite!")
    microondas = true
}

else if(prato == "Carne" && tempo <= 30 && tempo >= 15){
    console.log("Prato pronto, bom apetite!")
    microondas = true
}

else if(prato == "Feijão" && tempo <= 24 && tempo >= 12){
    console.log("Prato pronto, bom apetite!")
    microondas = true
}
else if(prato == "Brigadeiro" && tempo <= 16 && tempo >= 8){
    console.log("Prato pronto, bom apetite!")
    microondas = true
}

else if(prato == "Pipoca" && tempo <= 30 && tempo >= 20){
    console.log("A sua comida queimou!")
    microondas = true
}

else if(prato == "Macarrão" && tempo <= 24 && tempo >= 16){
console.log("A sua comida queimou!")
microondas = true
}
else if(prato == "Brigadeiro" && tempo <= 24 && tempo >= 16){
    console.log("A sua comida queimou!")
    microondas = true
    }
    
    else if(prato == "Pipoca" && tempo <= 9){
        console.log("Tempo insuficiente!")
        microondas = false
    }
    
    else if(prato == "Macarrão" && tempo <= 7){
        console.log("Tempo insuficiente!")
        microondas = false
    }
    else if(prato == "Carne" && tempo <= 14){
        console.log("Tempo insuficiente!")
        microondas = false
    }
    
    else if(prato == "Feijão" && tempo <= 11){
        console.log("Tempo insuficiente!")
        microondas = false
    }
    
    else if(prato == "Brigadeiro" && tempo <= 7){
        console.log("Tempo insuficiente!")
        microondas = false
    }
    else if(prato == "Pipoca" && tempo >= 31){
        console.log("Kabummm!")
        microondas = true
    }
    
    else if(prato == "Macarrão" && tempo >= 25){
        console.log("Kabummm!")
        microondas = true
    }
    
    else if(prato == "Carne" && tempo >= 46){
        console.log("Kabummm!")
        microondas = true
    }
    
    else if(prato == "Feijão" && tempo >= 37){
        console.log("Kabummm!")
        microondas = true
    }
    else if(prato == "Brigadeiro" && tempo >= 25){
        console.log("Kabummm! ")
        microondas = true
    }
    
    else{
        console.log("Prato inexistente!")
    }
    
    return microondas
    }
    
    console.log(microondas("Brigadeiro", 30));      