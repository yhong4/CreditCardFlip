import actionTypes from './actionTypes';

function modifyCardNumber(item){
    return {
        type: actionTypes.MODIFY_CARD_NUMBER,
        payload: {
            cardNumber:item
        }
    }
}

function modifyCardName(item) {
    return {
        type: actionTypes.MODIFY_CARD_NAME,
        payload: {
            cardName: item
        }
    }
}

function modifyExpireMonth(item) {
    return {
        type: actionTypes.MODIFY_EXPIRE_MONTH,
        payload: {
            expireMonth: item
        }
    }
}

function modifyExpireYear(item) {
    return {
        type: actionTypes.MODIFY_EXPIRE_YEAR,
        payload: {
            expireYear: item
        }
    }
}

function modifyCvv(item) {
    return {
        type: actionTypes.MODIFY_CVV,
        payload: {
            cardCvv: item
        }
    }
}

function flipCardToFront() {
    return {
        type: actionTypes.FLIP_CARD
    }
}

function flipCardToBack() {
    return {
        type: actionTypes.FLIP_CARD_BACK
    }
}

export default {
    modifyCardNumber,
    modifyCardName,
    modifyExpireMonth,
    modifyExpireYear,
    modifyCvv,
    flipCardToFront,
    flipCardToBack
}