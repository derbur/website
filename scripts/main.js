console.log('website ready');


document.addEventListener('DOMContentLoaded', () => {
    let helloDiv = document.querySelector('.greeting-text > .line-1');
    let greetingDiv = document.querySelector('.greeting-text > .line-2');
    let hi = "Hello";
    let greeting = "Welcome to my website";
    write(hi, helloDiv)
        .then(() => {
            write(greeting, greetingDiv);
        });
});

var write = (s, d) => {
    return new Promise((resolve, reject) => {
        s.split('').forEach((c, index, arr) => {
            setTimeout(() => {
                d.innerHTML += c; 
                if(index === arr.length - 1) 
                    setTimeout(() => { resolve('done'); }, 750);
            }, index * 75);
        });
    });
}