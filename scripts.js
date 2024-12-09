function manualPayment() {
    const walletAddress = document.getElementById('wallet-address').value;
    const amount = document.getElementById('amount').value;
    const walletInfo = document.getElementById('wallet-info');
    const walletDisplay = document.getElementById('wallet-display');

    if (walletAddress && amount) {
        walletDisplay.value = "UQBs1m8nnsVGrx1NCcm7vxvUsGDdQamUNSWSU2CrqFgCVvgw"; // Replace with your wallet address
        walletInfo.style.display = "block";
        alert(`To proceed with manual payment, send your tokens to the following address:\UQBs1m8nnsVGrx1NCcm7vxvUsGDdQamUNSWSU2CrqFgCVvgw\nAmount: ${amount}`);
    } else {
        alert("Please enter your wallet address and token amount.");
    }
}

function nowPayment() {
    const amount = document.getElementById('amount').value;

    if (amount) {
        window.open(`https://nowpayments.io/checkout?amount=${amount}`, '_blank');
    } else {
        alert("Please enter the token amount.");
    }
}

function copyToClipboard() {
    const walletDisplay = document.getElementById('wallet-display');
    walletDisplay.select();
    walletDisplay.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(walletDisplay.value)
        .then(() => alert("Wallet address copied to clipboard!"))
        .catch(() => alert("Failed to copy the wallet address."));
}