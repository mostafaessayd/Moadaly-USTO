function calculer() {

    function avg(a, b) {
        return (a + b) / 2;
    }

    let total = 0;
    let coef = 17;

    total += avg(+and_exam.value, +and_cc.value) * 2;
    total += avg(+modsim_exam.value, +modsim_cc.value) * 2;
    total += avg(+roc_exam.value, +roc_cc.value) * 2;
    total += avg(+aa_exam.value, +aa_cc.value);

    total += +fli_exam.value;
    total += +tns_exam.value;

    total += avg(+asr_exam.value, +asr_cc.value) * 2;

    let bda = (+bda_exam.value + +bda_td.value + +bda_tp.value) / 3;
    total += bda * 3;

    total += avg(+sfab_exam.value, +sfab_cc.value) * 2;

    total += +ethique_cc.value;

    resultat.value = (total / coef).toFixed(2);
}

calculer();
