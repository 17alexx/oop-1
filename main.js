//1

// class Kitab {
//     constructor(ad, muellif, movcuddur = true) {
//         this.ad = ad;
//         this.muellif = muellif;
//         this.movcuddur = movcuddur;
//     }
// }

// class Kitabxana {
//     constructor() {
//         this.kitablar = [];
//     }

    
//     kitabElaveEt(kitab) {
//         this.kitablar.push(kitab);
//     }

    
//     kitabSil(ad) {
//         this.kitablar = this.kitablar.filter(kitab => kitab.ad !== ad);
//     }

    
//     kitabVer(ad) {
//         const kitab = this.kitablar.find(kitab => kitab.ad === ad);
//         if (kitab && kitab.movcuddur) {
//             kitab.movcuddur = false;
//             return `Kitab "${ad}" uğurla ödünc verildi.`;
//         } else {
//             return `Kitab "${ad}" mövcud deyil və ya artıq ödünc götürülüb.`;
//         }
//     }

   
//     kitabQaytar(ad) {
//         const kitab = this.kitablar.find(kitab => kitab.ad === ad);
//         if (kitab && !kitab.movcuddur) {
//             kitab.movcuddur = true;
//             return `Kitab "${ad}" uğurla geri qaytarildi.`;
//         } else {
//             return `Kitab "${ad}" mövcuddur və ya qaytarilmali deyil.`;
//         }
//     }

    
//     muellifeGoreAxtar(muellif) {
//         const netice = this.kitablar.filter(kitab => kitab.muellif === muellif);
//         return netice.length > 0 ? netice : `Müəllif "${muellif}" üçün kitab tapilmadi.`;
//     }
// }


// const kitab1 = new Kitab("Dəli Kür", "İsmayil Şixli");
// const kitab2 = new Kitab("1984", "George Orwell");
// const kitabxana = new Kitabxana();

// kitabxana.kitabElaveEt(kitab1);
// kitabxana.kitabElaveEt(kitab2);

// console.log(kitabxana.kitabVer("Dəli Kür"));
// console.log(kitabxana.kitabVer("Dəli Kür")); 
// console.log(kitabxana.muellifeGoreAxtar("George Orwell")); 
// kitabxana.kitabQaytar("Dəli Kür");
// console.log(kitabxana.kitabVer("Dəli Kür"));


class Kitab {
    constructor(ad, muellif, movcuddur = true) {
        this.ad = ad;
        this.muellif = muellif;
        this.movcuddur = movcuddur;
    }
}


class Kitabxana {
    constructor() {
        this.kitablar = [];
    }

    kitabElaveEt(kitab) {
        this.kitablar.push(kitab);
    }

    kitabSil(ad) {
        this.kitablar = this.kitablar.filter(kitab => kitab.ad !== ad);
    }

    kitabVer(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab && kitab.movcuddur) {
            kitab.movcuddur = false;
            return `Kitab "${ad}" uğurla ödünc verildi.`;
        } else {
            return `Kitab "${ad}" mövcud deyil və ya artiq ödünc götürülüb.`;
        }
    }

    kitabQaytar(ad) {
        const kitab = this.kitablar.find(kitab => kitab.ad === ad);
        if (kitab && !kitab.movcuddur) {
            kitab.movcuddur = true;
            return `Kitab "${ad}" uğurla geri qaytarildi.`;
        } else {
            return `Kitab "${ad}" mövcuddur və ya qaytarılmalı deyil.`;
        }
    }

    muellifeGoreAxtar(muellif) {
        const netice = this.kitablar.filter(kitab => kitab.muellif === muellif);
        return netice.length > 0 ? netice : `Müəllif "${muellif}" üçün kitab tapılmadı.`;
    }
}


const kitabxana = new Kitabxana();


kitabxana.kitabElaveEt(new Kitab("Dəli Kür", "İsmayil Şixli"));
kitabxana.kitabElaveEt(new Kitab("1984", "George Orwell"));
kitabxana.kitabElaveEt(new Kitab("Cinayət və Cəza", "Fyodor Dostoyevski"));
kitabxana.kitabElaveEt(new Kitab("Səfillər", "Victor Hugo"));

console.log("Kitabxanadakı kitablar:", kitabxana.kitablar);


console.log(kitabxana.kitabVer("Dəli Kür"));
console.log(kitabxana.kitabVer("1984"));

console.log("Dəli Kür mövcud?", kitabxana.kitablar.find(k => k.ad === "Dəli Kür").movcuddur);
console.log("1984 mövcud?", kitabxana.kitablar.find(k => k.ad === "1984").movcuddur);


console.log(kitabxana.kitabQaytar("Dəli Kür"));
console.log(kitabxana.kitabQaytar("1984"));


console.log("Dəli Kür mövcud?", kitabxana.kitablar.find(k => k.ad === "Dəli Kür").movcuddur);
console.log("1984 mövcud?", kitabxana.kitablar.find(k => k.ad === "1984").movcuddur);


console.log("İsmayil Şixli-nin kitablari:", kitabxana.muellifeGoreAxtar("İsmayil Şixli"));
console.log("Victor Hugo-nun kitablari:", kitabxana.muellifeGoreAxtar("Victor Hugo"));
console.log("Franz Kafka-nin kitablari:", kitabxana.muellifeGoreAxtar("Franz Kafka"));