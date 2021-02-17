MAX_INVESTMENT_YEARS = 25;
//
function compute()
{
	var amount = parseInt(document.getElementById("amount").value);
	var years_elem = document.getElementById("investment-duration-years")
	var years_of_investment = parseInt(years_elem.options[years_elem.selectedIndex].text);
	var interest_rate = parseFloat(document.getElementById("interest-rate").value);
	var interest_result = (amount * interest_rate / 100 ) * years_of_investment;
	var investment_final_year = 2020 + years_of_investment;
	if (Number.isNaN(amount) || amount <= 0)
	{
		alert('Please insert a positive amount.');
		document.getElementById("amount").focus();
	}
	else {
	var user_string = "If you deposit " + highlightText(amount) + ", at an interest rate of " + highlightText(interest_rate + "%");
	user_string += ", you will receive an amount of "+ highlightText(interest_result) +", in the year <mark>"+ highlightText(investment_final_year) + ".";
	document.getElementById("interest-result").innerHTML = user_string ;
    }
}

function highlightText(text_to_highlight)
{
	return "<span style=\"background-color: #FFFF00\">"+ text_to_highlight +"</span>"
}

function updateInterestRateText()
{
	var interest_rate = parseFloat(document.getElementById("interest-rate").value);
	document.getElementById("interest-rate-text").innerHTML = interest_rate + "%" ;
}
function populateInvestementDurationYearsDropdown()
{
	var select = document.getElementById("investment-duration-years"); 
	// Optional: Clear all existing options first:
	select.innerHTML = "";
	// Populate list with options:
	for(var i = 1; i <= MAX_INVESTMENT_YEARS; i++) {
	    select.innerHTML += "<option value=\"" + i + "\">" + i + "</option>";
	}
}
