/* let numbers = [1, 2 ,3, 4, 5]

for (let i = 0; i < numbers.length; i++)
{
    console.log(numbers[i])
} 
 */
/* let numbers = [1, 2, 3, 4, 5]

let i = 0

while (numbers[i])
{
    console.log(numbers[i])
    i++
} */

let colors = ["amarillo", "azul", "verde", "rojo"]

let isNwew = true

let newColor = prompt("Introduce un color")

for(let i = 0; i < colors.length; i++)
{
    if (newColor == colors[i])
    {
        isNew = false
        console.log("Existe")
        break
    }
}

let isNwew = true

if (isNew == isNew)
{
    console.log("Nuevo color, agregando...")
    colors.push(newColor)
}
else
{
    console.log("Ya existe")
}