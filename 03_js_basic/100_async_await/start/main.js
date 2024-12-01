// 非同期処理（await\Promise）
let a = 0;


function init() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 1;
            resolve(a)
        }, 2000);
    })
        console.log(b);
        console.log(b);
    // }).catch((c) => {
    //     console.log('catchが実行', c)
    // })    
}
