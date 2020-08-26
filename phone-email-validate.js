var sysFn = {
  isEmail: function (emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
  },
  isUaPhone: function (phone) {
    var digits = phone.replace(/\D/g, '');
    if (digits.length != 12 && digits.length != 13) return false;
    var pattern = new RegExp(/380(39|50|63|73|66|67|68|91|92|93|94|95|96|97|98|99)\d{7}$/i);
    return pattern.test(digits);
  },
  prepareUaPhone: function (phone) {
    phone = phone.replace(/[^0-9.]/g, "");

    let length = phone.length;
    switch (length) {
      //501111111
      case 9:
        phone = '+380' + phone;
        break;
        //0501111111
      case 10:
        phone = '+38' + phone;
        break;
        //80501111111
      case 11:
        phone = '+3' + phone;
        break;
        //380501111111
      case 12:
        phone = '+' + phone;
        break;
    }

    return phone;

  }
};