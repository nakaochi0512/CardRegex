function convert(cardNumber) {
	if(cardNumber.match(/^00/)){     
		return cardNumber.replace("00", "s").toLowerCase();
	}else{
		return cardNumber.replace("j", "uj").toLowerCase();
	}
}