function getInputValueById(id) {
    const addMoney = document.getElementById(id).value;
    const addMoneyNumber = parseFloat(addMoney);
    return addMoneyNumber;
}

function getTextValueById(id) {
    const addNum = document.getElementById(id).innerText; 
    const mainBalance = parseFloat(addNum);
    return mainBalance;
}

// history tab btn
function getHistoryTab(id) {
    document.getElementById('card-container').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    document.getElementById('btn-history').classList.add('bg-lime-300', 'text-black');
    document.getElementById('btn-history').classList.remove('text-gray-500');
    document.getElementById('btn-donation').classList.add('text-gray-500');
    document.getElementById('btn-donation').classList.remove('bg-lime-300');
}

// card tab btn
function getCardTab(id) {
    document.getElementById('card-container').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('btn-history').classList.remove('bg-lime-300' , 'text-black');
    document.getElementById('btn-donation').classList.remove('text-gray-500');
    document.getElementById('btn-donation').classList.add('text-black' , 'bg-lime-300');
}