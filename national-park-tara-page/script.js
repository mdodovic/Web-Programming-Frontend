function testAndRespond() {

    var currentHotelSpace = 2;
    var currentManisonSpace = 5;
    var currentVillageHouseSpace = 10;


    var guestName = document.reserve.name.value;
    var guestSurname = document.reserve.surname.value;
    var guestRoomRequest = document.reserve.roomCount.value;

    var guestAccomodationType = document.getElementById("accType").value;
    var guestPhoneNumber = document.reserve.phoneNumber.value;

    if (guestName == null || guestName == "") {
        alert("Popunite sva polja!");
        return false;
    }
    if (guestSurname == null || guestSurname == "") {
        alert("Popunite sva polja!");
        return false;
    }
    if (guestRoomRequest == null || guestRoomRequest == "") {
        alert("Popunite sva polja!");
        return false;
    }
    if (guestAccomodationType == null || guestAccomodationType == "") {
        alert("Popunite sva polja!");
        return false;
    }
    if (guestPhoneNumber == null || guestPhoneNumber == "") {
        alert("Popunite sva polja!");
        return false;
    }

    var phoneNumberRegex = /^06[345]\/\d{4}-\d{3}$/
    var validPhoneNumber = phoneNumberRegex.test(guestPhoneNumber);
    if (!validPhoneNumber) {
        alert(guestName + " nema validan telefonski broj: " + guestPhoneNumber);
        return false;
    }
    if (guestAccomodationType == "hotel") {
        if (guestRoomRequest <= currentHotelSpace) {
            alert(guestName + "(" + guestPhoneNumber + ")" + " rezervisao " + guestRoomRequest + " soba u hotelu po ceni " + guestRoomRequest * 2000);
        } else {
            alert(guestName + "(" + guestPhoneNumber + ")" + " nije moguće da rezerviše " + guestRoomRequest + " soba");
        }
    }
    if (guestAccomodationType == "manison") {
        if (guestRoomRequest <= currentManisonSpace) {
            alert(guestName + "(" + guestPhoneNumber + ")" + " rezervisao " + guestRoomRequest + " soba u vili po ceni " + guestRoomRequest * 1500);
        } else {
            alert(guestName + "(" + guestPhoneNumber + ")" + " nije moguće da rezerviše " + guestRoomRequest + " soba");
        }
    }
    if (guestAccomodationType == "villageHouse") {
        if (guestRoomRequest <= currentVillageHouseSpace) {
            alert(guestName + "(" + guestPhoneNumber + ")" + " rezervisao " + guestRoomRequest + " soba u seoskoj kući po ceni " + guestRoomRequest * 1200);
        } else {
            alert(guestName + "(" + guestPhoneNumber + ")" + " nije moguće da rezerviše " + guestRoomRequest + " soba");
        }
    }
    return true;
}
