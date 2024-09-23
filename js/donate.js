// first card
document.getElementById('btn-donate-one')
    .addEventListener('click', function () {
        //get input value
        const addMoney = getInputValueById('add-money-input');
        //main balance
        const mainBalance = getTextValueById('main-balance');

        //card balance add
        if (addMoney < 0) {
            alert('Insert Possitive Value');
        }
        else if (addMoney > 0 && mainBalance >= addMoney) {
            const totalDonateId = parseFloat(document.getElementById('total-donate-id-one').innerText);
            const addBalance = addMoney + totalDonateId;
            const updateBalance = mainBalance - addMoney;
            document.getElementById('total-donate-id-one').innerText = addBalance.toFixed(2);
            document.getElementById('main-balance').innerText = updateBalance.toFixed(2);
            document.getElementById('modal-section').classList.remove('hidden');

            // history add
            const historyItems = document.createElement('div');
            historyItems.className = 'border border-gray-100 p-6 rounded-xl';
            historyItems.innerHTML = `
            <h1 class="text-xl font-bold text-black mb-2">${addMoney} Tk Donate for Flood at Noakhali, Bangladesh</h1>
            <p class="text-gray-500">Date : ${new Date()}</p>
            `;
            const historyContainer = document.getElementById('history-container');
            historyContainer.insertBefore(historyItems, historyContainer.firstChild);

        }
        else {
            alert("You don't have enough balance")
        }

    })


// secound card
document.getElementById('btn-donate-two')
    .addEventListener('click', function () {
        //get input value
        const addMoney = getInputValueById('add-money-input-two');
        console.log(addMoney)
        //main balance
        const mainBalance = getTextValueById('main-balance');
        console.log(mainBalance)
        //card balance add
        if (addMoney < 0) {
            alert('Insert Possitive Value');
        }
        else if (addMoney > 0 && mainBalance >= addMoney) {
            const totalDonateId = parseFloat(document.getElementById('total-donate-id-two').innerText);
            const addBalance = addMoney + totalDonateId;
            const updateBalance = mainBalance - addMoney;
            document.getElementById('total-donate-id-two').innerText = addBalance.toFixed(2);
            document.getElementById('main-balance').innerText = updateBalance.toFixed(2);
            document.getElementById('modal-section').classList.remove('hidden');

            // history add
            const historyItems = document.createElement('div');
            historyItems.className = 'border border-gray-100 p-6 rounded-xl';
            historyItems.innerHTML = `
            <h1 class="text-xl font-bold text-black mb-2">${addMoney} Tk Donate for Flood Relief in Feni,Bangladesh</h1>
            <p class="text-gray-500">Date : ${new Date()}</p>
            `;
            const historyContainer = document.getElementById('history-container');
            historyContainer.insertBefore(historyItems, historyContainer.firstChild);

        }
        else {
            alert("Don't have enough balance");
        }

    })

// Third card
document.getElementById('btn-donate-three')
    .addEventListener('click', function () {
        //get input value
        const addMoney = getInputValueById('add-money-input-three');
        console.log(addMoney)
        //main balance
        const mainBalance = getTextValueById('main-balance');
        console.log(mainBalance)
        //card balance add
        if (addMoney < 0) {
            alert('Insert Possitive Value');
        }
        else if (addMoney > 0 && mainBalance >= addMoney) {
            const totalDonateId = parseFloat(document.getElementById('total-donate-id-three').innerText);
            const addBalance = addMoney + totalDonateId;
            const updateBalance = mainBalance - addMoney;
            document.getElementById('total-donate-id-three').innerText = addBalance.toFixed(2);
            document.getElementById('main-balance').innerText = updateBalance.toFixed(2);
            document.getElementById('modal-section').classList.remove('hidden');

            // history add
            const historyItems = document.createElement('div');
            historyItems.className = 'border border-gray-100 p-6 rounded-xl';
            historyItems.innerHTML = `
            <h1 class="text-xl font-bold text-black mb-2">${addMoney} Aid for Injured in the Quota Movement</h1>
            <p class="text-gray-500">Date : ${new Date()}</p>
            `;
            const historyContainer = document.getElementById('history-container');
            historyContainer.insertBefore(historyItems, historyContainer.firstChild);

        }
        else {
            alert("Don't have enough balance")
        }

    })
    
//  change directory faq page
    document.getElementById('btn-blog-link')
    .addEventListener('click', function () {
       window.location.href = "/faq.html";
    })