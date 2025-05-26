// Fungsi untuk mengonversi dari Celcius ke Fahrenheit
function convertTemperature() {
    let inputSuhu = parseFloat(document.getElementById("input-suhu").value);

    if (isNaN(inputSuhu)) {
        alert("Masukkan nilai suhu dalam angka!");
        return;
    }
    let fahrenheit = (inputSuhu * 9 / 5) + 32;
    document.getElementById("hasil-suhu").value = fahrenheit.toFixed(2) + " °F";
    document.getElementById("detail-suhu").value =
        `${inputSuhu}°C dikonversi ke Fahrenheit:\n(${inputSuhu} × 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Fungsi untuk mereset form
function resetForm() {
    document.getElementById("input-suhu").value = "";
    document.getElementById("hasil-suhu").value = "";
    document.getElementById("detail-suhu").value = "";
}

// Fungsi untuk mengonversi dari Fahrenheit ke Celcius (reverse)
function reverseConversion() {
    let fahrenheit = parseFloat(document.getElementById("input-suhu").value);

    if (isNaN(fahrenheit)) {
        alert("Masukkan nilai suhu dalam angka!");
        return;
    }
    let celcius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("hasil-suhu").value = celcius.toFixed(2) + " °C";
    document.getElementById("detail-suhu").value =
        `${fahrenheit}°F dikonversi ke Celcius:\n(${fahrenheit} - 32) × 5/9 = ${celcius.toFixed(2)}°C`;
}
