const messages = [
    "Oscar",
    "Pedro",
    "Nella",
    "Laura",
    "Juan",
    "Monica"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
};

module.exports = { randomMsg };