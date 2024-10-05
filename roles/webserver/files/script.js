function calculateWeight() {
    const height = document.getElementById('height').value;
    const gender = document.getElementById('gender').value;
    let idealWeight = 0;

    if (gender === 'male') {
        idealWeight = 50 + 0.91 * (height - 152.4);
    } else {
        idealWeight = 45.5 + 0.91 * (height - 152.4);
    }

    document.getElementById('result').innerHTML = `Ideal Weight: ${idealWeight.toFixed(2)} kg`;
}
