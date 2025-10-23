var ch = "Habib";
var nbr = 7;
var bool = true;
function sum(nbr1, nbr2) {
    return nbr1 + nbr2;
}
var Etudiant = /** @class */ (function () {
    function Etudiant(id, nom, prenom, age) {
        this.age = age;
        this.nom = nom;
        this.prenom = prenom;
        this.id = id;
    }
    Etudiant.prototype.affich = function () {
        console.log("nom : " + this.nom + " prenom : " + this.prenom + " id : " + this.id.toString() + " age : " + this.age.toString() + "\n");
    };
    return Etudiant;
}());
var v = new Etudiant(840, "Habib", "El Fekih", 21);
v.affich();
function affich2(tab, idd) {
    var ch;
    var Role;
    (function (Role) {
        Role["Admin"] = "ADMIN";
        Role["User"] = "USER";
        Role["Guest"] = "GUEST";
    })(Role || (Role = {}));
    if (typeof idd == "number")
        ch = idd.toString();
    else
        ch = idd;
    console.log("id : " + ch + "\n");
    console.log("Role : " + Role.Admin + "\n");
    for (var i = 0; i < tab.length; i++) {
        console.log(tab[i]);
        console.log("\n");
    }
}
