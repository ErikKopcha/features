// window.addEventListener('DOMContentLoaded', () => {
//     function request() {
//         const req = new XMLHttpRequest();
//         req.open("GET", "http://localhost:3000/people");
//         req.setRequestHeader("Content-type", "application/json; charset=utf-8");
//         req.send();
//         req.addEventListener('load', () => {
//             if (req.status == 200) {
//                 let data = JSON.parse(req.response);
//                 console.log(data);
//             } else {
//                 console.error('Wrong...');
//             }
//         });
//     }

//     request();
// });

// window.addEventListener('DOMContentLoaded', () => {
//     getResourse('http://localhost:3000/people')
//         .then(data => console.log('result => ', data))
//         .catch (err => console.error(err));

//         async function getResourse(url) {
//             const res = await fetch(`${url}`);

//             if (!res.ok) {
//                 throw new Error(`Coulr not fetch ${url}, status ${res.status}`);
//             }

//             return await res.json();
//         }    
// });

// post
window.addEventListener('DOMContentLoaded', () => {
    function request() {
        let body = {
            name: 'Someline',
            surname: 'Som',
            age: 22,
            id: Math.random()
        };

        let json = JSON.stringify(body);

        const req = new XMLHttpRequest();
        req.open("POST", "http://localhost:3000/people");
        req.setRequestHeader("Content-type", "application/json; charset=utf-8");
        req.send(json);
        req.addEventListener('load', () => {
            if (req.status == 200) {
                let data = JSON.parse(req.response);
                console.log(data);
            } else {
                console.error('Wrong...');
            }
        });
    }

    request();
});