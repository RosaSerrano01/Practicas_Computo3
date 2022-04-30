num1= float(input("Ingrese un numero :"))
num2=float(input("Ingrese un numero : "))

operacion=input("Digite la operacion : ").upper()

if(operacion >= 'S'){
    suma=num1+num2
    console.log(f`\n La suma es: ${suma}`);
}else{
    resta=num1-num2
    console.log(f`\n La resta es: ${resta}`)
}
