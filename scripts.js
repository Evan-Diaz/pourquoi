        // Limiter l'entrée aux chiffres uniquement
        document.getElementById('numericInput').addEventListener('input', function (e) {
            this.value = this.value.replace(/[^0-9]/g, ''); // Supprimer tout caractère qui n'est pas un chiffre
        });