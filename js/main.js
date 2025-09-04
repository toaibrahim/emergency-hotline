// heart icon functionalities

const likeCount = document.getElementById('like-count');
let count = 0;

const heartIcon = document.querySelectorAll('.heart-icon');
// console.log(heartIcon);

for(let i=0 ; i<heartIcon.length;i++){
    const eachIcon = heartIcon[i];
    eachIcon.addEventListener('click',function(){
        
        const clickedHeartIcon = document.querySelector('.heart-icon');
        const isLiked = eachIcon.dataset.liked === 'true';

        if(isLiked){
            count --;
            eachIcon.dataset.liked = 'false';
            clickedHeartIcon.classList.remove('text-red-600');
            clickedHeartIcon.classList.add('text-gray-600');
        }else{
            count ++;
            eachIcon.dataset.liked = 'true';
            clickedHeartIcon.classList.remove('text-gray-600');
            clickedHeartIcon.classList.add('text-red-600');
        }

        likeCount.innerText = count;
    })
}



// Call functionalities

const historyData = [];

// alert function

function altfunc(tit,num){
    const title = document.getElementById(tit)
    const number = document.getElementById(num);
    
    alert(`
        Service name : ${title.innerText}
        Number : ${number.innerText}
        `)
    
}

// function for coin reducing
function coinCalculate(){
    let getCoin = document.getElementById('coin').innerText;
    const convertedCoin = parseInt(getCoin);

    if(convertedCoin<20){
        alert("You don't have sufficient coin to call");
        return;
    }

    let newCoin = convertedCoin - 20;

    document.getElementById('coin').innerText = newCoin;
    
}

// historydata creating function

function trackHistory(cardTitle,cardNumber){
    const title = document.getElementById(cardTitle)
    const number = document.getElementById(cardNumber);

    const data = {
        service : title,
        num : number ,
        time : new Date().toLocaleTimeString()
    }

    historyData.push(data);
}



document.getElementById('card1-call-btn').addEventListener('click',function(){
    altfunc('card1-title','card1-num');

    coinCalculate()

    trackHistory('card1-title','card1-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})


document.getElementById('card2-call-btn').addEventListener('click',function(){
    
    altfunc('card2-title','card2-num');

    coinCalculate()

    trackHistory('card2-title','card2-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card3-call-btn').addEventListener('click',function(){
    
    altfunc('card3-title','card3-num');

    coinCalculate()

    trackHistory('card3-title','card3-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card4-call-btn').addEventListener('click',function(){
    
    altfunc('card4-title','card4-num');

    coinCalculate()

    trackHistory('card4-title','card4-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})


document.getElementById('card5-call-btn').addEventListener('click',function(){
    
    altfunc('card5-title','card5-num');

    coinCalculate()

    trackHistory('card5-title','card5-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card6-call-btn').addEventListener('click',function(){
    
    altfunc('card6-title','card6-num');

    coinCalculate()

    trackHistory('card6-title','card6-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card7-call-btn').addEventListener('click',function(){
    
    altfunc('card7-title','card7-num');

    coinCalculate()

    trackHistory('card7-title','card7-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card8-call-btn').addEventListener('click',function(){
    
    altfunc('card8-title','card8-num');

    coinCalculate()

    trackHistory('card8-title','card8-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})

document.getElementById('card9-call-btn').addEventListener('click',function(){
    
    altfunc('card9-title','card9-num');

    coinCalculate()

    trackHistory('card9-title','card9-num');
    

    // History section 

    const historyParent = document.getElementById('history-content');
    historyParent.innerText = ''

    for(const datas of historyData){
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="box bg-[#FAFAFA] px-4 py-6 mb-3 mx-3 rounded-lg flex justify-between items-center gap-3">
                        <div class="left">
                            <h3 class="text-lg font-medium">${datas.service.innerText}</h3>
                            <p class="text-gray-500">${datas.num.innerText}</p>
                        </div>
                        <div class="righ">
                            <p>${datas.time}</p>
                        </div>
                    </div>
        `
        historyParent.appendChild(div);
    }

})




// copy number 

document.getElementById('card1-copy-btn').addEventListener('click',function(){
    const numToCopy = document.getElementById('card1-num')
})