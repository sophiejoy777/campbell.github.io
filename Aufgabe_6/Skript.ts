var emissionAsia2018 = 16274.1;
var emissionAustralia2018 = 2100.5;
var emissionNorthAmerica2018 = 6035.6;
var emissionSouthAmerica2018 = 1261.5;
var emissionAfrica2018 = 1235.5;
var emissionEurope2018 = 4209.3;
var emissionAsia2008 = 12954.7;
var emissionAustralia2008 = 1993;
var emissionNorthAmerica2008 = 6600.4;
var emissionSouthAmerica2008 = 1132.6;
var emissionAfrica2008 = 1028;
var emissionEurope2008 = 4965.7;
var totalEmission2018 = emissionEurope2018 + emissionAfrica2018 + emissionSouthAmerica2018 + emissionNorthAmerica2018 + emissionAustralia2018 + emissionAsia2018;

var ValueTwoEurope = emissionEurope2018 * 100 / totalEmission2018;
var ValueThreeEurope = (emissionEurope2018 - emissionEurope2008) * 100 / emissionEurope2008;
var ValueFourEurope = emissionEurope2018 - emissionEurope2008;
var ValueTwoAsia = emissionAsia2018 * 100 / totalEmission2018;
var ValueThreeAsia = (emissionAsia2018 - emissionAsia2008) * 100 / emissionAsia2008;
var ValueFourAsia = emissionAsia2018 - emissionAsia2008;
var ValueTwoSouth_A = emissionSouthAmerica2018 * 100 / totalEmission2018;
var ValueThreeSouth_A = (emissionSouthAmerica2018 - emissionSouthAmerica2008) * 100 / emissionSouthAmerica2008;
var ValueFourSouth_A = emissionSouthAmerica2018 - emissionSouthAmerica2008;
var ValueTwoNorth_A = emissionNorthAmerica2018 * 100 / totalEmission2018;
var ValueThreeNorth_A = (emissionNorthAmerica2018 - emissionNorthAmerica2008) * 100 / emissionNorthAmerica2008;
var ValueFourNorth_A = emissionNorthAmerica2018 - emissionNorthAmerica2008;
var ValueTwoAustralia = emissionAustralia2018 * 100 / totalEmission2018;
var ValueThreeAustralia = (emissionAustralia2018 - emissionAustralia2008) * 100 / emissionAustralia2008;
var ValueFourAustralia = emissionAustralia2018 - emissionAustralia2008;
var ValueTwoAfrica = emissionAfrica2018 * 100 / totalEmission2018;
var ValueThreeAfrica = (emissionAfrica2018 - emissionAfrica2008) * 100 / emissionAfrica2008;
var ValueFourAfrica = emissionAfrica2018 - emissionAfrica2008;
function functionEurope() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionEurope2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoEurope;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeEurope;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourEurope;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoEurope + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Europe').addEventListener('click', functionEurope);
});
function functionAsia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionAsia2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoAsia;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeAsia;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourAsia;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoAsia + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Asia').addEventListener('click', functionAsia);
});
function functionNorth_A() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionNorthAmerica2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoNorth_A;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeNorth_A;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourNorth_A;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoNorth_A + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#North_A').addEventListener('click', functionNorth_A);
});
function functionSouth_A() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionSouthAmerica2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoSouth_A;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeSouth_A;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourSouth_A;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoSouth_A + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#South_A').addEventListener('click', functionSouth_A);
});
function functionAustralia() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionAustralia2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoAustralia;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeAustralia;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourAustralia;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoAustralia + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Australia').addEventListener('click', functionAustralia);
});
function functionAfrica() {
    document.querySelector("#Title").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#ValueOneText").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#ValueOne").innerHTML = "" + emissionAfrica2018;
    document.querySelector("#ValueTwo").innerHTML = "" + ValueTwoAfrica;
    document.querySelector("#ValueThree").innerHTML = "" + ValueThreeAfrica;
    document.querySelector("#ValueFour").innerHTML = "" + ValueFourAfrica;
    document.querySelector(".chart").setAttribute('style', 'height:' + ValueTwoAfrica + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Africa').addEventListener('click', functionAfrica);
});
//# sourceMappingURL=EmissionTypeScript.js.map