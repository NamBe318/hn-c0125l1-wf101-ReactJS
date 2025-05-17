var City;
(function (City) {
    City[City["HaNoi"] = 0] = "HaNoi";
    City[City["HoChiMinh"] = 1] = "HoChiMinh";
    City[City["DaNang"] = 2] = "DaNang";
})(City || (City = {}));
var city = City.HaNoi;
console.log(city);
