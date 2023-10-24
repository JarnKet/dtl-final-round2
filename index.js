const form = document.getElementById("form");
const showPassword = document.getElementById("eye");

form.addEventListener("submit", (e) => {
  // ປ້ອງກັນບໍ່ໃຫ້ມີການໂຫຼດໜ້າໃໝ່ເມື່ອມີການກົດ Submit Form
  e.preventDefault();

  // ດຶງເອົາຄ່າຂໍ້ມູນຈາກ Input ທັງສອງ
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // ດຶງເອົາ Element ທີ່ສະແດງຜົນຂໍ້ຄວາມແຈ້ງເຕືອນ
  const usernameError = document.getElementById("username-message");
  const passwordError = document.getElementById("password-message");

  // ເຄຍຂໍ້ຄວາມເກົ່າກ່ອນໜ້ານີ້
  usernameError.innerHTML = "";
  passwordError.innerHTML = "";

  //ກວດສອບເງື່ອນໄຂການປ້ອນຂໍ້ມູນ
  if ((!username || username === "") && (!password || password === "")) {
    usernameError.innerHTML = "ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້ຂອງທ່ານ";
    passwordError.innerHTML = "ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານ";

    return;
  }

  if (!username || username === "") {
    usernameError.innerHTML = "ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້ຂອງທ່ານ";
    return;
  }

  if (!password || password === "") {
    passwordError.innerHTML = "ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານ";
    return;
  } else if (password.length >= 20) {
    passwordError.innerHTML = "ລະຫັດຜ່ານບໍ່ຄວນເກີນ 20 ຕົວອັກສອນ";
    return;
  } else if (password.length <= 6) {
    passwordError.innerHTML = "ລະຫັດຜ່ານບໍ່ຄວນຕ່ຳກວ່າ 6 ຕົວອັກສອນ";
    return;
  } else if (password.toLowerCase() === "password") {
    passwordError.innerHTML =
      "ບໍ່ຄວນຕັ້ງ Password ເປັນລະຫັດຜ່ານເພື່ອຄວາມປອດໄພຂອງບັນຊີຂອງທ່ານ";
    return;
  }

  return true;
});

// ເພີ່ມ Function ໃຫ້ກັບປຸ່ມສະແດງລະຫັດຜ່ານ
showPassword.addEventListener("click", () => {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";

  if (password.type === "text") {
    showPassword.src = "images/eye-close.svg";
  } else {
    showPassword.src = "images/visible.svg";
  }
});
