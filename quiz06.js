function applyCoupon(cart, coupon) {
  cart.items.forEach((item) => {
    item.price -= coupon.discount;
  });
}
const userACart = {
  items: [
    { name: "키보드", price: 30000 },
    { name: "마우스", price: 20000 },
  ],
};

function deepCopy(object) {
    if (object === null || typeof object !== "object") { 
      return object;
    } 

    const copy = Array.isArray(object) ? [] : {};   

    for (let key of Object.keys(object)) {
          copy[key] = deepCopy(object[key]);
    }
    
    return copy;
};

const userBCart = deepCopy(userACart);
//const userBCart = Object.assign({}, userACart);
console.log(userBCart === userACart);
const coupon = { discount: 5000 };

applyCoupon(userBCart, coupon);

//1. 각각의 값이 5천원씩 할인된 같은값을 가지게 됩니다.
//2. A를 B에 할당하면서 같은 값을 참조(주소값)하게 되었습니다.
/*3. 참조형 데이터이기 때문에 B의 값을 변경할 경우 A도 변경됩니다.
    따라서 깊은 복사를 해서 독립적으로 만들어줘야 합니다.
    JSON.parse(JSON.stringify()), structuredClone
*/
