// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.

function show_magicians(magicians: string[]){
    }
    function make_great(magicians: string[]){
        return magicians.map(name => `The Great ${name}`)

    }
    let magicians_names =["Usman", "rani", "Lubna"]

    let copy_magicians_names = magicians_names.slice()
    let copy_great_magicians = make_great(copy_magicians_names)
    console.log("oroginal Array\n");
    show_magicians(magicians_names)
    console.log("copied Array\n");
    show_magicians(copy_great_magicians)



    

    


