const user = {
    age: 22,
    password: '4555555',
    agreeToTerm: false
}
function checkAge(us) {
    return us.age > 18
}
function checkPassw(us) {
    return us.password.length >= 4
}
function checkTerms(us) {
    return us.agreeToTerm === true
}
console.log(checkAge(user))
//вспомогательная функция
// function validation(us, ...func) {
//     for (let i = 0; i < func.length; i++) {
//         if (func[i](us) === false) return false;
//     }
//     return true;
// }
// console.log(validation(user, checkPassw, checkTerms, checkAge))
function validationNew(...func) {
    return function (us) {
        for (let i = 0; i < func.length; i++) {
            if (func[i](us) === false) return false;
        }
        return true;
    }
}
const valid1 = validationNew(checkPassw, checkTerms, checkAge)
const valid2 = validationNew(checkPassw, checkAge)
console.log(valid1(user), valid2(user))
//===================рекурсия=================
let t = 0;
function f1() {
    t++;
    if (t == 100) return;
    console.log(t)
    f1()
}
f1();
//цикл
function f2() {
    let out = '';
    for (let i = 0; i <= 30; i++) {
        out += `${i} - `
    }
    console.log(out)
}
f2()
//рекурсия
let i = 0;
let out = '';
function f3() {
    i++;
    out += `${i} - `
    if (i >= 30) return;
    f3()
}
f3();
console.log(out)

//копим деньги на ...

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)

}
let s_1 = 0;
let kol = 0;
// function moneyRecursion() {
//     let m = randomInt(10, 15)
//     // console.log('add ' + m)
//     s_1 += m;
//     kol++;
//     console.log(s_1, kol, m)
//     if (s_1 > 100) return;
//     moneyRecursion()
// }
// moneyRecursion()
function moneyCicle() {
    let s_2 = 0;
    let kol2 = 0;
    // for (let i = 0; true; i++) {
    while (true) {
        let m2 = randomInt(10, 15)
        // console.log('add ' + m)
        s_2 += m2;
        kol2++;
        console.log(s_2, kol2, m2)
        if (s_2 > 100) return;

    }
}
moneyCicle()
//====================
const users = {
    'ivanov': {
        age: 25,
        parent: {
            'ivanov_1': {
                age: 55
            },
            'ivanov_2': {
                age: 57,
                parent: {
                    'sergienko_1_2': {
                        age: 88,
                        parent: {
                            "sergienko": {
                                age: 103
                            }
                        }
                    },
                    'ivanov_3': {
                        age: 57,
                        parent: {
                            'ivanov_3_3': {
                                age: 77

                            }
                        }
                    },

                }
            },
        }
    },
    'petrov': {
        age: 25,
        parent: {
            'ipetrova_1': {
                age: 51
            },
            'petrov_2': {
                age: 53,
                parent: {
                    'tyrkina_1_2': {
                        age: 81,
                        parent: {
                            "tyrcina": {
                                age: 101
                            }
                        }
                    },
                    'petrov_2_3': {
                        age: 57,
                        parent: {
                            'petrov_2_3': {
                                age: 77

                            },
                            'mincina': {

                            }

                        }
                    },

                }
            },
        }
    }
}

function useParentRecursion(obj) {
    if (obj.parent !== undefined)
        for (let key in obj.parent) {
            console.log(key)
            useParentRecursion(obj.parent[key])
        }
}
//useParentRecursion(users.ivanov)
//перебор всех объектов
for (let key in users) {

    useParentRecursion(users[key])
}
//=============анимация==============
let position = 0;
// document.querySelector('.block').addEventListener('mousemove', function () {

//     for (let i = 0; i < 200; i++) {
//         position += 1;
//         this.style.left = position + 'px'
//     }

// })
function recusionAnimation() {
    position += 5;
    if (position > 300) return;
    document.querySelector('.block').style.left = position + 'px'
    animation()
}
function animation() {
    setTimeout(recusionAnimation, 100)
}
animation()