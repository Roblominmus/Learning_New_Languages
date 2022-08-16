document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll(".grid div"))
    const score = document.querySelector('#score')
    const startbtn = document.querySelector('#start')
    const width = 10


    //The TetrisBlock
    const LBlock = [
        //These define the possible rotations of th tetris blocks
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2, width*2+1],
        [width, width*2, width*2+1, width*2+2]
    ]

    const ZBlock = [
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1]
    ]

    const IBlock =[
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    //I Will Add The TBlock Later

    const OBlock = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    //This is an array that houses all the tetris blocks available
    const Blocks =[LBlock, OBlock, ZBlock, IBlock]

    //This means the blocks starting position will be on the fifth tile on the grid
    //Basically, the block will start from the middle
    let positon = 4

    //This makes it so that the index of the first block is returned with it's index of the first rotation
    //In this case, it is the LBlock that will be given
    //And the LBloc will spawn in it's numbers in the first rotation
    //let block = Blocks[0][0]

    //Instead of the above syntax, i will use a math operation to randomly select a block based on it's index
    //I will then set the block to it's first rotation
    let randomindex = Math.floor(Math.random()*Blocks.length)
    //Math.floor() is use dto round up a number to it's nearest integer
    let block = Blocks[randomindex][0]
    //Instead of passing out the first item in the array we will just choose a random index that is within the length of our array and pass it in
    //That way it will give us a random shape instead of the same shape

    //This function will draw the block on the grid
    function Draw(){
        //This might be confusing so i will explain it in simple terms
        //The blocks all spawn from the same position on the grid
        //So, the code below is saying that
        //foreach block that is position specified
        //we will collect one of the blocks and send it to a div that is located at that position
        //Then we will then add a class to the block
        //This class will then help us to change the color of the block in the css script
        block.forEach(index => {
            squares[positon + index].classList.add('blocks')
        })
    }

    function Erase(){
        block.forEach(index => {
            squares[positon + index].classList.remove('blocks')
        })
    }
})