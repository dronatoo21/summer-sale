let total = 0.00;
// CARD CLICKS
function handleCardClick (data){
    const selectedItemsCont = document.getElementById('selected-items');
    const itemName = data.childNodes[3].childNodes[3].innerText;

    const count = selectedItemsCont.childElementCount;

    const p = document.createElement('p');
    p.classList.add('text-2xl', 'font-medium', 'my-3');
    p.innerHTML = `${count + 1}. ${itemName}`;
    selectedItemsCont.appendChild(p);

    const price = data.childNodes[3].childNodes[5].innerText.split(' ')[0];

    const firstTotal = parseFloat(total) + parseFloat(price);
    const totalPrice =  parseFloat(firstTotal) ;
    total = firstTotal.toFixed(2) ;

    document.getElementById('first-total').innerText = total;  
    document.getElementById('grand-total').innerText = total;
   
    if(firstTotal > 0){
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled');
    }

    if(total >= 200){
        const couponBtn = document.getElementById('coupon-btn');
        couponBtn.removeAttribute('disabled');
    }
}

// APPLY CLICKS 
function getCouponDiscount(){
    const discount = total / 100 * 20;
    const discountPriceString = discount.toFixed(2);
    const discountPrice = parseFloat(discountPriceString);
    const getCouponCode = document.getElementById('coupon-code').value;
    if(getCouponCode === 'SELL200'){
        document.getElementById('total-discount').innerText = discountPriceString;
        const grandTotal = total - discountPrice;
        const grandTotalPriceString = parseFloat(grandTotal);
        const grandTotalPrice = grandTotalPriceString.toFixed(2);
        document.getElementById('grand-total').innerText = grandTotalPrice;
    }
    else{
        alert('Invalid coupon code');
    }
}

// MODAL HOME CLICK 
function goHomeBtn(){
    window.location.href = 'index.html';
}