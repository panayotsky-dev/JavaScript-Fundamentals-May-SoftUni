function travelTime(data) {


    let result = {};

    for (let line of data) {
        let tokens = line.split(' > ');
        let country = tokens[0];
        let city = tokens[1];
        let cost = Number(tokens[2]);


        if (!result.hasOwnProperty(country)) {
            result[country] = {};
        }

        if (!result[country].hasOwnProperty(city)) {
            result[country][city] = cost;
        }

        let oldCost = result[country][city];
        if (oldCost > cost || oldCost === 0) {
            result[country][city] = cost;

        }


    }

    let sortCountry = Object.entries(result).sort(([countryA, cityInfoA], [countryB, cityInfoB]) => {
        return countryA.localeCompare(countryB)
    })

    for (let [key, townInfo] of sortCountry) {
        let sortTown = Object.entries(townInfo).sort(([keyA, valueA], [keyB, valueB]) => {
            return valueA - valueB
        })

        let buff = ${key} ->;
        for (let [townName, townCost] of sortTown) {
            buff +=  ${townName} -> ${townCost} ;
        }
        console.log(buff);
    }



}
