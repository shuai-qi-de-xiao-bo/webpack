const Notifier = require('node-notifier');
const Path = require('path');

Notifier.notify({
    title: '建国提示',
    message: '年轻的渔夫哟，你掉的是金斧头还是银斧头？',
    icon: Path.join(__dirname, 'icon.png'),
    actions: ['金斧头', '银斧头'],
    wait: true,
    reply: true,
}, (error, response) => {
    switch (response) {
        case '金뿯施头':
            console.log('这个比选的金斧头');
            break;
        case '뿯붿뿯施头':
            console.log('这个比选的银斧头');
            break;
        default:
            console.log('这个比啥也没选');
    }
});