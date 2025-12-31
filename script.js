function calculer() {

    function deux(a, b) {
        return (a + b) / 2;
    }

    let total = 0;
    let coefTotal = 17;

    total += deux(+and_exam.value, +and_cc.value) * 2;
    total += deux(+modsim_exam.value, +modsim_cc.value) * 2;
    total += deux(+roc_exam.value, +roc_cc.value) * 2;
    total += deux(+aa_exam.value, +aa_cc.value) * 1;

    total += +fli_exam.value * 1;
    total += +tns_exam.value * 1;

    total += deux(+asr_exam.value, +asr_cc.value) * 2;

    let bda = (+bda_exam.value + +bda_td.value + +bda_tp.value) / 3;
    total += bda * 3;

    total += deux(+sfab_exam.value, +sfab_cc.value) * 2;

    total += +ethique_cc.value * 1;

    let moyenne = total / coefTotal;
    resultat.value = moyenne.toFixed(2);
}

// حساب مباشر عند تحميل الصفحة
calculer();
