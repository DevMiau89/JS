/**
 * Created by DevMiau on 12-Mar-18.
 */
 export var jsModule = (function () {
            var n = 5;
            var avg = function (...n) {
                let tot = 0;

                for(let i=0; i< n.length;i++){
                    tot +=n[i];
                }
                return tot/n.length;
            };
            var add = function (n, m) {
                return n + m;
            };

            return {
                avg : avg,
                add : add
            }
        })();

export function add (n, m) {
                return n + m;
            };
export function sub (n, m) {
                return n - m;
            };


