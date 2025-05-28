// Fungsi untuk mengonversi suhu
    function convertTemperature() {
    const input = parseFloat(document.getElementById("input-suhu").value);
    const from = document.getElementById("from-unit").value;
    const to = document.getElementById("to-unit").value;
    const hasil = document.getElementById("hasil-suhu");
    const detail = document.getElementById("detail-suhu");

// Validasi input
    if (isNaN(input)) {
        hasil.value = "";
        detail.value = "Masukkan suhu yang valid!";
        return;
    }

    let celsius;
    
// Konversi ke Celcius dulu
    switch (from) {
        case "celcius":
            celsius = input;
            break;
        case "fahrenheit":
            celsius = (input - 32) * 5 / 9;
            break;
        case "kelvin":
            celsius = input - 273.15;
            break;
        case "reamur":
            celsius = input * 5 / 4;
            break;
    }
    let result;
    let explanation = "";

// Konversi dari Celcius ke target
    switch (to) {
        case "celcius":
            result = celsius;
            explanation = `C = (${input} - 32) × 5/9 = ${celsius.toFixed(2)} °C`;
            break;
        case "fahrenheit":
            result = (celsius * 9 / 5) + 32;
            explanation = `F = (C × 9/5) + 32 = (${celsius.toFixed(2)} × 9/5) + 32 = ${result.toFixed(2)} °F`;
            break;
        case "kelvin":
            result = celsius + 273.15;
            explanation = `K = C + 273.15 = ${celsius.toFixed(2)} + 273.15 = ${result.toFixed(2)} K`;
            break;
        case "reamur":
            result = celsius * 4 / 5;
            explanation = `Re = C × 4/5 = ${celsius.toFixed(2)} × 4/5 = ${result.toFixed(2)} °Re`;
            break;
    }
// Tampilkan hasil
        hasil.value = result.toFixed(2);
        detail.value = explanation;
}
// Tombol Reset
    function resetForm() {
        document.getElementById("input-suhu").value = "";
        document.getElementById("hasil-suhu").value = "";
        document.getElementById("detail-suhu").value = "";
        document.getElementById("from-unit").value = "celcius";
        document.getElementById("to-unit").value = "fahrenheit";
}

// Fungsi untuk membalikkan konversi
    function reverseConversion() {
        const fromSelect = document.getElementById("from-unit");
        const toSelect = document.getElementById("to-unit");

        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;

        const input = document.getElementById("input-suhu").value;
        if (input.trim() !== "") {
            convertTemperature();
        }
}