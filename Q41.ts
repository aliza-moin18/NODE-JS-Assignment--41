// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians : string[]) : void{

    for (let magician of magicians){
        console.log(magician)
    }
}
      let magicianNames : string[] = ["Alex Elmsley", "Devant", "Pen anf Teller", "Shin Lim", "Dynamo"]
    show_magicians(magicianNames)